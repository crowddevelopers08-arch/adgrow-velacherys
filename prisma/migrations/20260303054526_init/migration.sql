-- AlterTable
ALTER TABLE "leads" ADD COLUMN     "pincode" TEXT,
ADD COLUMN     "preferredTime" TEXT,
ADD COLUMN     "userAgent" TEXT,
ADD COLUMN     "utmCampaign" TEXT,
ADD COLUMN     "utmContent" TEXT,
ADD COLUMN     "utmMedium" TEXT,
ADD COLUMN     "utmSource" TEXT,
ADD COLUMN     "utmTerm" TEXT,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'new';
