/*
  Warnings:

  - The `start_hour` column on the `Activity` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `end_hour` column on the `Activity` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "start_hour",
ADD COLUMN     "start_hour" INTEGER,
DROP COLUMN "end_hour",
ADD COLUMN     "end_hour" INTEGER;
