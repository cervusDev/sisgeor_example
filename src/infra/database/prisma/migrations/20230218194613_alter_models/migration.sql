/*
  Warnings:

  - You are about to drop the column `calendar` on the `projetos` table. All the data in the column will be lost.
  - You are about to drop the `DayOff` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DayOffsResource` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProjectsToResource` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `comparacoes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ferias` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `recursos` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `UserId` to the `projetos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client` to the `projetos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `document` to the `projetos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `realEndDate` to the `projetos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `realStartDate` to the `projetos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `responsible` to the `projetos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `DayOffsResource` DROP FOREIGN KEY `DayOffsResource_dayoffId_fkey`;

-- DropForeignKey
ALTER TABLE `DayOffsResource` DROP FOREIGN KEY `DayOffsResource_resourceId_fkey`;

-- DropForeignKey
ALTER TABLE `_ProjectsToResource` DROP FOREIGN KEY `_ProjectsToResource_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ProjectsToResource` DROP FOREIGN KEY `_ProjectsToResource_B_fkey`;

-- DropForeignKey
ALTER TABLE `comparacoes` DROP FOREIGN KEY `comparacoes_resourceId_fkey`;

-- DropForeignKey
ALTER TABLE `ferias` DROP FOREIGN KEY `ferias_resourceId_fkey`;

-- AlterTable
ALTER TABLE `projetos` DROP COLUMN `calendar`,
    ADD COLUMN `UserId` INTEGER NOT NULL,
    ADD COLUMN `client` VARCHAR(191) NOT NULL,
    ADD COLUMN `document` VARCHAR(191) NOT NULL,
    ADD COLUMN `realEndDate` VARCHAR(191) NOT NULL,
    ADD COLUMN `realStartDate` VARCHAR(191) NOT NULL,
    ADD COLUMN `responsible` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `DayOff`;

-- DropTable
DROP TABLE `DayOffsResource`;

-- DropTable
DROP TABLE `_ProjectsToResource`;

-- DropTable
DROP TABLE `comparacoes`;

-- DropTable
DROP TABLE `ferias`;

-- DropTable
DROP TABLE `recursos`;

-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('user', 'admin') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Taks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `responsible` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `endDate` VARCHAR(191) NOT NULL,
    `startDate` VARCHAR(191) NOT NULL,
    `taskTime` VARCHAR(191) NOT NULL,
    `realEndDate` VARCHAR(191) NOT NULL,
    `realStartDate` VARCHAR(191) NOT NULL,
    `completionPercent` VARCHAR(191) NOT NULL,
    `priority` ENUM('alta', 'baixa', 'media') NOT NULL,
    `taskType` ENUM('bug', 'refatoracao', 'performance', 'estilo', 'documentacao') NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ProjectId` INTEGER NOT NULL,

    UNIQUE INDEX `Taks_ProjectId_key`(`ProjectId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `projetos` ADD CONSTRAINT `projetos_UserId_fkey` FOREIGN KEY (`UserId`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Taks` ADD CONSTRAINT `Taks_ProjectId_fkey` FOREIGN KEY (`ProjectId`) REFERENCES `projetos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
