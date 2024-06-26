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
  try {
    const data = await request.json();
    console.log(data);
    const { images, ...res } = data;
    const newShoe = await prisma.shoe.create({
      data: res,
    });

    await Promise.all(
      images?.map(async (url: string) => {
        await prisma.imageShoe.create({
          data: {
            url: url,
            shoeId: newShoe.id,
          },
        });
      })
    );

    return NextResponse.json({
      newShoe,
      images,
    });
  } catch (error) {
    console.log(error);
  }
}
