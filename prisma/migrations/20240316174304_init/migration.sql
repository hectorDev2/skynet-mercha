/*
  Warnings:

  - Added the required column `category` to the `Tshirt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subcategory` to the `Tshirt` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tshirt" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "subcategory" TEXT NOT NULL
);
INSERT INTO "new_Tshirt" ("description", "id", "name", "price", "tag") SELECT "description", "id", "name", "price", "tag" FROM "Tshirt";
DROP TABLE "Tshirt";
ALTER TABLE "new_Tshirt" RENAME TO "Tshirt";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
