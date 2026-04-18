-- AlterTable
ALTER TABLE "leads" ADD COLUMN     "pageTitle" TEXT,
ADD COLUMN     "pageUrl" TEXT,
ADD COLUMN     "referrer" TEXT,
ADD COLUMN     "telecrmData" JSONB,
ADD COLUMN     "telecrmError" TEXT,
ADD COLUMN     "userAgent" TEXT;

-- CreateIndex
CREATE INDEX "leads_telecrmSynced_idx" ON "leads"("telecrmSynced");

-- CreateIndex
CREATE INDEX "leads_createdAt_idx" ON "leads"("createdAt");
