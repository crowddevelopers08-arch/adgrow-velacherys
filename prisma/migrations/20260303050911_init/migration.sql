/*
  Warnings:

  - You are about to drop the column `ipAddress` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `telecrmError` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `userAgent` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `utmCampaign` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `utmContent` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `utmMedium` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `utmSource` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `utmTerm` on the `leads` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "leads" DROP COLUMN "ipAddress",
DROP COLUMN "telecrmError",
DROP COLUMN "userAgent",
DROP COLUMN "utmCampaign",
DROP COLUMN "utmContent",
DROP COLUMN "utmMedium",
DROP COLUMN "utmSource",
DROP COLUMN "utmTerm",
ADD COLUMN     "error" TEXT;
