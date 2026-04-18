/*
  Warnings:

  - You are about to drop the column `pageTitle` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `telecrmData` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `telecrmError` on the `leads` table. All the data in the column will be lost.
  - The `status` column on the `leads` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "LeadStatus" AS ENUM ('NEW', 'CONTACTED', 'SCHEDULED', 'CONVERTED', 'LOST');

-- DropIndex
DROP INDEX "public"."leads_createdAt_idx";

-- DropIndex
DROP INDEX "public"."leads_telecrmSynced_idx";

-- AlterTable
ALTER TABLE "leads" DROP COLUMN "pageTitle",
DROP COLUMN "telecrmData",
DROP COLUMN "telecrmError",
ADD COLUMN     "ipAddress" TEXT,
ADD COLUMN     "pagePath" TEXT,
ADD COLUMN     "utmCampaign" TEXT,
ADD COLUMN     "utmContent" TEXT,
ADD COLUMN     "utmMedium" TEXT,
ADD COLUMN     "utmSource" TEXT,
ADD COLUMN     "utmTerm" TEXT,
DROP COLUMN "status",
ADD COLUMN     "status" "LeadStatus" NOT NULL DEFAULT 'NEW';
