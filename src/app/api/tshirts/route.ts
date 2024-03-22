import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const paramCategory = searchParams.get("category");

  const tshirts = await prisma.tshirt.findMany({
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
    tshirts,
  });
}

export async function POST(request: Request) {
  const { name, description, price, images, tag, category, subcategory } =
    await request.json();

  const newTshirt = await prisma.tshirt.create({
    data: {
      name,
      description,
      price,
      category,
      subcategory,
      tag,
    },
  });

  await Promise.all(
    images?.map(async (url: string) => {
      console.log(images);
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
