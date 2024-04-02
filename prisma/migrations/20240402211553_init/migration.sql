/*
  Warnings:

  - You are about to drop the column `subcategory` on the `Shoe` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Shoe" DROP COLUMN "subcategory";

-- CreateTable
CREATE TABLE "Jacket" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "label" TEXT NOT NULL DEFAULT 'default',
    "price" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL DEFAULT 2,

    CONSTRAINT "Jacket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImageJacket" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "jacketId" INTEGER,

    CONSTRAINT "ImageJacket_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Jacket" ADD CONSTRAINT "Jacket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImageJacket" ADD CONSTRAINT "ImageJacket_jacketId_fkey" FOREIGN KEY ("jacketId") REFERENCES "Jacket"("id") ON DELETE SET NULL ON UPDATE CASCADE;
