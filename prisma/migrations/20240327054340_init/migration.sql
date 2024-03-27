-- AlterTable
ALTER TABLE "Tshirt" ADD COLUMN     "userId" INTEGER NOT NULL DEFAULT 2;

-- CreateTable
CREATE TABLE "Shoe" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "subcategory" TEXT NOT NULL,
    "label" TEXT NOT NULL DEFAULT 'default',
    "userId" INTEGER NOT NULL DEFAULT 2,

    CONSTRAINT "Shoe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImageShoe" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "shoeId" INTEGER,

    CONSTRAINT "ImageShoe_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tshirt" ADD CONSTRAINT "Tshirt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shoe" ADD CONSTRAINT "Shoe_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImageShoe" ADD CONSTRAINT "ImageShoe_shoeId_fkey" FOREIGN KEY ("shoeId") REFERENCES "Shoe"("id") ON DELETE SET NULL ON UPDATE CASCADE;
