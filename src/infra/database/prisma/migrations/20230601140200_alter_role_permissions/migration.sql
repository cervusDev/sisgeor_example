-- AlterTable
ALTER TABLE `usuarios` MODIFY `role` ENUM('user', 'admin', 'analyst', 'enterprise', 'collaborator') NOT NULL;
