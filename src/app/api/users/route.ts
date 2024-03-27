import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request: Request) {
  const users = await prisma.user.findMany({
    include: {
      tshirts: true,
    },
  });

  return NextResponse.json(users);
}
