-- CreateTable
CREATE TABLE "Tshirt" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "tshirtId" INTEGER,
    CONSTRAINT "Image_tshirtId_fkey" FOREIGN KEY ("tshirtId") REFERENCES "Tshirt" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
