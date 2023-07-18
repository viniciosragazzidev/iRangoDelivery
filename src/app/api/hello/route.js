import prisma from "../../../../prisma/prisma";
export async function GET(request) {
  const categories = await prisma.category.findMany();
  return new Response(JSON.stringify(categories));
}
