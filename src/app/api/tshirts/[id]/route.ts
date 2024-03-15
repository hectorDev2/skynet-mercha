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