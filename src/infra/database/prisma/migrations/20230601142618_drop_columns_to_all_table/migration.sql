/*
  Warnings:

  - You are about to drop the column `client` on the `projetos` table. All the data in the column will be lost.
  - You are about to drop the column `document` on the `projetos` table. All the data in the column will be lost.
  - You are about to drop the column `endDate` on the `projetos` table. All the data in the column will be lost.
  - You are about to drop the column `realEndDate` on the `projetos` table. All the data in the column will be lost.
  - You are about to drop the column `realStartDate` on the `projetos` table. All the data in the column will be lost.
  - You are about to drop the column `responsible` on the `projetos` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `projetos` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `projetos` table. All the data in the column will be lost.
  - You are about to drop the column `team` on the `projetos` table. All the data in the column will be lost.
  - You are about to drop the `Taks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Taks` DROP FOREIGN KEY `Taks_ProjectId_fkey`;

-- AlterTable
ALTER TABLE `projetos` DROP COLUMN `client`,
    DROP COLUMN `document`,
    DROP COLUMN `endDate`,
    DROP COLUMN `realEndDate`,
    DROP COLUMN `realStartDate`,
    DROP COLUMN `responsible`,
    DROP COLUMN `startDate`,
    DROP COLUMN `status`,
    DROP COLUMN `team`;

-- DropTable
DROP TABLE `Taks`;

-- CreateTable
CREATE TABLE `acoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deletedAt` DATETIME(3) NULL,
    `ProjectId` INTEGER NOT NULL,

    UNIQUE INDEX `acoes_ProjectId_key`(`ProjectId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `acoes` ADD CONSTRAINT `acoes_ProjectId_fkey` FOREIGN KEY (`ProjectId`) REFERENCES `projetos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
