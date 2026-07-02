/*
  Warnings:

  - The `subject` column on the `Student` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[enrollmentId]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[paymentId]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `enrollmentId` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentId` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Subjects" AS ENUM ('MATHEMATICS', 'PHYSICS');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'PAID', 'OVERDUE');

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "enrollmentId" INTEGER NOT NULL,
ADD COLUMN     "paymentId" INTEGER NOT NULL,
DROP COLUMN "subject",
ADD COLUMN     "subject" "Subjects"[];

-- CreateTable
CREATE TABLE "Enrollment" (
    "id" SERIAL NOT NULL,
    "selectedSubjects" "Subjects"[],
    "grade" "Grade" NOT NULL,

    CONSTRAINT "Enrollment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payments" (
    "id" SERIAL NOT NULL,
    "Month" TEXT NOT NULL,
    "Amount" DECIMAL(65,30) NOT NULL,
    "PaymentMethod" TEXT NOT NULL,
    "ReferenceNumber" BIGINT NOT NULL,
    "status" "Status" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_enrollmentId_key" ON "Student"("enrollmentId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_paymentId_key" ON "Student"("paymentId");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_enrollmentId_fkey" FOREIGN KEY ("enrollmentId") REFERENCES "Enrollment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Payments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
