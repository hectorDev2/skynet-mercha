import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const { username, email, password } = await request.json();
  console.log(username, email, password);

  const userExists = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  if (userExists) {
    return NextResponse.json({
      error: "ese usuario ya existe",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  return NextResponse.json({
    user,
  });
}
