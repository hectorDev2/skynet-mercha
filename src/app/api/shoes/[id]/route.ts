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
  const shoe = await prisma.shoe.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      images: true,
    },
  });

  return NextResponse.json({
    shoe,
  });
}

export async function DELETE(
  request: Request,

  { params }: { params: Params }
) {
  const { id } = params;
  const shoe = await prisma.shoe.deleteMany({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json({
    shoe,
  });
}

export async function PUT(request: Request, { params }: { params: Params }) {
  const data = await request.json();
  const shoe = await prisma.shoe.update({
    where: {
      id: Number(params.id),
    },
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      category: data.category,
      label: data.label,
      tag: data.tag,
    },
    include: {
      images: true,
    },
  });

  const images = await prisma.imageShoe.findMany({
    where: {
      shoeId: Number(params.id),
    },
  });

  return NextResponse.json({
    shoe,
  });
}
