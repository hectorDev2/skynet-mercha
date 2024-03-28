/*
  Warnings:

  - Added the required column `gender` to the `Shoe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Shoe" ADD COLUMN     "gender" TEXT NOT NULL;
