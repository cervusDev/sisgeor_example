-- CreateTable
CREATE TABLE `projetos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `team` ENUM('ti', 'dados', 'design', 'desenvolvimento') NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `status` ENUM('previsto', 'cancelado', 'concluido', 'andamento', 'planejado') NOT NULL,
    `calendar` JSON NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `recursos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `analytics` ENUM('S', 'N') NOT NULL,
    `calendar` JSON NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `office` VARCHAR(191) NOT NULL,
    `priceDay` VARCHAR(191) NOT NULL,
    `priceWeek` VARCHAR(191) NOT NULL,
    `contract` ENUM('fixo', 'parceiro') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comparacoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `resourceId` INTEGER NOT NULL,
    `calendar` JSON NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ferias` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `resourceId` INTEGER NOT NULL,
    `startDate` DATETIME(3) NULL,
    `endDate` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DayOff` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ibge` INTEGER NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `uf` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DayOffsResource` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `day` INTEGER NOT NULL,
    `month` INTEGER NOT NULL,
    `uf` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `dayoffId` INTEGER NOT NULL,
    `resourceId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ProjectsToResource` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ProjectsToResource_AB_unique`(`A`, `B`),
    INDEX `_ProjectsToResource_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `comparacoes` ADD CONSTRAINT `comparacoes_resourceId_fkey` FOREIGN KEY (`resourceId`) REFERENCES `recursos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ferias` ADD CONSTRAINT `ferias_resourceId_fkey` FOREIGN KEY (`resourceId`) REFERENCES `recursos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DayOffsResource` ADD CONSTRAINT `DayOffsResource_dayoffId_fkey` FOREIGN KEY (`dayoffId`) REFERENCES `DayOff`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DayOffsResource` ADD CONSTRAINT `DayOffsResource_resourceId_fkey` FOREIGN KEY (`resourceId`) REFERENCES `recursos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProjectsToResource` ADD CONSTRAINT `_ProjectsToResource_A_fkey` FOREIGN KEY (`A`) REFERENCES `projetos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProjectsToResource` ADD CONSTRAINT `_ProjectsToResource_B_fkey` FOREIGN KEY (`B`) REFERENCES `recursos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
