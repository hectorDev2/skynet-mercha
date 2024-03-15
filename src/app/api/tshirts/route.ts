import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
export async function GET() {
  const tshirts = await prisma.tshirt.findMany({
    include: {
      images: true,
    },
  });

  return NextResponse.json({
    tshirts,
  });
}

export async function POST(request: Request) {
  const { name, description, price, images } = await request.json();

  const newTshirt = await prisma.tshirt.create({
    data: {
      name: name,
      description: description,
      price: price,
    },
  });

  await Promise.all(
    images.map(async (url: string) => {
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
