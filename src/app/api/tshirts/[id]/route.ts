import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
interface Params {
  id: string;
}
export async function GET(
  request: Request,

  { params }: { params: Params }
) {
  const { id } = params;
  const tshirt = await prisma.tshirt.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      images: true,
    },
  });

  return NextResponse.json({
    tshirt,
  });
}

export async function DELETE(
  request: Request,

  { params }: { params: Params }
) {
  const { id } = params;
  const tshirt = await prisma.tshirt.deleteMany({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json({
    tshirt,
  });
}

export async function PUT(request: Request, { params }: { params: Params }) {
  const data = await request.json();
  const tshirt = await prisma.tshirt.update({
    where: {
      id: Number(params.id),
    },
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      category: data.category,
      subcategory: data.subcategory,
      tag: data.tag,
    },
    include: {
      images: true,
    },
  });

  const images = await prisma.image.findMany({
    where: {
      tshirtId: Number(params.id),
    },
  });
  console.log(images);

  return NextResponse.json({
    tshirt,
  });
}
