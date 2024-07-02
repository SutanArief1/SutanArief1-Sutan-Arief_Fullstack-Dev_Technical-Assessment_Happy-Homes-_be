/*
  Warnings:

  - You are about to drop the column `duration` on the `Activity` table. All the data in the column will be lost.
  - The `start_hour` column on the `Activity` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `end_hour` column on the `Activity` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `activityId` on the `Project` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[projectId]` on the table `Activity` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `projectId` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_activityId_fkey";

-- DropIndex
DROP INDEX "Project_activityId_key";

-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "duration",
ADD COLUMN     "projectId" TEXT NOT NULL,
DROP COLUMN "start_hour",
ADD COLUMN     "start_hour" INTEGER,
DROP COLUMN "end_hour",
ADD COLUMN     "end_hour" INTEGER;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "activityId";

-- CreateIndex
CREATE UNIQUE INDEX "Activity_projectId_key" ON "Activity"("projectId");

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
