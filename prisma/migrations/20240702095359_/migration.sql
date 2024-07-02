/*
  Warnings:

  - The primary key for the `Project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `projectId` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_projectId_fkey";

-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "projectId",
ADD COLUMN     "projectId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP CONSTRAINT "Project_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Project_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Project_id_key" ON "Project"("id");

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
