import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const paramCategory = searchParams.get("category");

  const jackets = await prisma.jacket.findMany({
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
    jackets,
  });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { images, ...res } = data;
    const newJacket = await prisma.jacket.create({
      data: res,
    });

    await Promise.all(
      images?.map(async (url: string) => {
        await prisma.imageJacket.create({
          data: {
            url: url,
            jacketId: newJacket.id,
          },
        });
      })
    );

    return NextResponse.json({
      newJacket,
      images,
    });
  } catch (error) {
    console.log(error);
  }
}
