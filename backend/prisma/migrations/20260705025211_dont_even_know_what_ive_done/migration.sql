/*
  Warnings:

  - You are about to drop the column `enrollmentId` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `paymentId` on the `Student` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[studentId]` on the table `Enrollment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `studentId` to the `Enrollment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentId` to the `Payments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_enrollmentId_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_paymentId_fkey";

-- DropIndex
DROP INDEX "Student_enrollmentId_key";

-- DropIndex
DROP INDEX "Student_paymentId_key";

-- AlterTable
ALTER TABLE "Enrollment" ADD COLUMN     "studentId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Payments" ADD COLUMN     "studentId" INTEGER NOT NULL,
ALTER COLUMN "ReferenceNumber" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "enrollmentId",
DROP COLUMN "paymentId";

-- CreateIndex
CREATE UNIQUE INDEX "Enrollment_studentId_key" ON "Enrollment"("studentId");

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
