import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const paramCategory = searchParams.get("category");

  const shoes = await prisma.shoe.findMany({
    include: {
      images: true,
    },
    orderBy: [
      {
        id: "desc",
      },
    ],
    where: {
      category: {
        contains: paramCategory ? paramCategory : "",
      },
    },
  });

  return NextResponse.json({
    shoes,
  });
}

export async function POST(request: Request) {
  const data = await request.json();
  const { images } = data;

  const newTshirt = await prisma.shoe.create({
    data,
  });

  await Promise.all(
    images?.map(async (url: string) => {
      await prisma.image.create({
        data: {
          url: url,
          tshirtId: newTshirt.id,
        },
      });
    })
  );

  return NextResponse.json({
    newTshirt,
    images,
  });
}
