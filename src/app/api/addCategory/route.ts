import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";

export async function POST(request: NextRequest) {
  const { title, description } = await request.json();

  if (!title) {
    return new NextResponse("O nome da categoria é obrigatório", {
      status: 400,
    });
  }

  const newCategory = await prisma.categoryType.create({
    data: {
      title,
      description,
    },
  });

  return new NextResponse(JSON.stringify(newCategory));
}
