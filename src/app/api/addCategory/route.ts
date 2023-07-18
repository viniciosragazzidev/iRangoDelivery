import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";

export async function POST(request: NextRequest) {
  const { name, description } = await request.json();

  if (!name) {
    return new NextResponse("O nome da categoria é obrigatório", {
      status: 400,
    });
  }

  const newCategory = await prisma.category.create({
    data: {
      name,
      description,
    },
  });

  return new NextResponse(JSON.stringify(newCategory));
}
