/*
  Warnings:

  - You are about to drop the column `total_duration` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `total_income` on the `Activity` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "total_duration",
DROP COLUMN "total_income";
