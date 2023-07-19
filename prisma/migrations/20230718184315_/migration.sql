/*
  Warnings:

  - You are about to drop the column `categorieTypeId` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `categorieTypeId` on the `ProductCategory` table. All the data in the column will be lost.
  - You are about to drop the `CategorieType` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryTypeId` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryTypeId` to the `ProductCategory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_categorieTypeId_fkey";

-- DropForeignKey
ALTER TABLE "ProductCategory" DROP CONSTRAINT "ProductCategory_categorieTypeId_fkey";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "categorieTypeId",
ADD COLUMN     "categoryTypeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ProductCategory" DROP COLUMN "categorieTypeId",
ADD COLUMN     "categoryTypeId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "CategorieType";

-- CreateTable
CREATE TABLE "categoryType" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "categoryType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_categoryTypeId_fkey" FOREIGN KEY ("categoryTypeId") REFERENCES "categoryType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCategory" ADD CONSTRAINT "ProductCategory_categoryTypeId_fkey" FOREIGN KEY ("categoryTypeId") REFERENCES "categoryType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
