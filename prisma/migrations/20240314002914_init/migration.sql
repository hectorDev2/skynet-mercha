/*
  Warnings:

  - You are about to alter the column `price` on the `Tshirt` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tshirt" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_Tshirt" ("description", "id", "name", "price") SELECT "description", "id", "name", "price" FROM "Tshirt";
DROP TABLE "Tshirt";
ALTER TABLE "new_Tshirt" RENAME TO "Tshirt";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
