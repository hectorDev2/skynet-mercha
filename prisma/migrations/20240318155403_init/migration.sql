/*
  Warnings:

  - Added the required column `category` to the `Tshirt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subcategory` to the `Tshirt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tag` to the `Tshirt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tshirt" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "subcategory" TEXT NOT NULL,
ADD COLUMN     "tag" TEXT NOT NULL;
