/*
  Warnings:

  - You are about to drop the column `end_hour` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `start_hour` on the `Activity` table. All the data in the column will be lost.
  - Made the column `start_date` on table `Activity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `end_date` on table `Activity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title_activity` on table `Activity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `duration` on table `Activity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `Activity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `project_name` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rate` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_userId_fkey";

-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "end_hour",
DROP COLUMN "start_hour",
ADD COLUMN     "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMPTZ(6),
ADD COLUMN     "updated_at" TIMESTAMPTZ(6),
ALTER COLUMN "start_date" SET NOT NULL,
ALTER COLUMN "start_date" SET DATA TYPE TIMESTAMPTZ(6),
ALTER COLUMN "end_date" SET NOT NULL,
ALTER COLUMN "end_date" SET DATA TYPE TIMESTAMPTZ(6),
ALTER COLUMN "title_activity" SET NOT NULL,
ALTER COLUMN "duration" SET NOT NULL,
ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMPTZ(6),
ADD COLUMN     "updated_at" TIMESTAMPTZ(6),
ALTER COLUMN "project_name" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMPTZ(6),
ADD COLUMN     "updated_at" TIMESTAMPTZ(6),
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "rate" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
