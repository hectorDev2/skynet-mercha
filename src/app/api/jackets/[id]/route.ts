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
  const jacket = await prisma.jacket.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      images: true,
    },
  });

  return NextResponse.json({
    jacket,
  });
}

export async function DELETE(
  request: Request,

  { params }: { params: Params }
) {
  const { id } = params;
  const jacket = await prisma.jacket.deleteMany({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json({
    jacket,
  });
}

export async function PUT(request: Request, { params }: { params: Params }) {
  const data = await request.json();
  const jacket = await prisma.jacket.update({
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

  const images = await prisma.imageJacket.findMany({
    where: {
      jacketId: Number(params.id),
    },
  });
  console.log(images);

  return NextResponse.json({
    jacket,
  });
}
