import prisma from "../../../../prisma/prisma";
export async function GET(request) {
  const categories = await prisma.categoryType.findMany();
  return new Response(JSON.stringify(categories));
}
