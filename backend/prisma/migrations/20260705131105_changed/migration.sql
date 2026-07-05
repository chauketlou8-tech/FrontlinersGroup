/*
  Warnings:

  - The `selectedSubjects` column on the `Enrollment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `subject` column on the `Student` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Enrollment" DROP COLUMN "selectedSubjects",
ADD COLUMN     "selectedSubjects" TEXT[];

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "subject",
ADD COLUMN     "subject" TEXT[];

-- DropEnum
DROP TYPE "Subjects";
