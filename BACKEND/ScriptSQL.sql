CREATE TABLE `digitalbarbershop`.`sede` (`IdSede` INT NOT NULL AUTO_INCREMENT , `NombreSede` VARCHAR(30) NOT NULL , `DireccionSede` VARCHAR(50) NOT NULL , `TelefonoSede` BIGINT NOT NULL , PRIMARY KEY (`IdSede`)) ENGINE = InnoDB;

CREATE TABLE `digitalbarbershop`.`usuarios` (`IdUsuario` INT NOT NULL AUTO_INCREMENT , `NombreUsuario` VARCHAR(40) NOT NULL , `TelefonoUsuario` BIGINT NOT NULL , `CorreoUsuario` VARCHAR(100) NOT NULL , PRIMARY KEY (`IdUsuario`)) ENGINE = InnoDB;

CREATE TABLE `digitalbarbershop`.`barberos` (`IdBarbero` INT NOT NULL AUTO_INCREMENT , `NombreBarbero` VARCHAR(40) NOT NULL , `TelefonoBarbero` BIGINT NOT NULL , `CorreoBarbero` VARCHAR(100) NOT NULL , PRIMARY KEY (`IdBarbero`)) ENGINE = InnoDB;

CREATE TABLE `digitalbarbershop`.`tipousuario` (`IdTipoUsuario` INT NOT NULL AUTO_INCREMENT , `Descripcion` INT NOT NULL , PRIMARY KEY (`IdTipoUsuario`)) ENGINE = InnoDB;

CREATE TABLE `digitalbarbershop`.`producto` (`IdProducto` INT NOT NULL AUTO_INCREMENT , `NombreProducto` VARCHAR(40) NOT NULL , `Cantidad` INT NOT NULL , `Precio` DOUBLE NOT NULL , PRIMARY KEY (`IdProducto`)) ENGINE = InnoDB;

CREATE TABLE `digitalbarbershop`.`factura` (`IdFactura` INT NOT NULL AUTO_INCREMENT , `ValorTotal` DOUBLE NOT NULL , `FechaCompra` DATE NOT NULL , PRIMARY KEY (`IdFactura`)) ENGINE = InnoDB;

CREATE TABLE `digitalbarbershop`.`tipospelo` (`idPelo` INT NOT NULL AUTO_INCREMENT , `DescripcionPelo` VARCHAR(30) NOT NULL , PRIMARY KEY (`idPelo`)) ENGINE = InnoDB;

CREATE TABLE `digitalbarbershop`.`tipoproducto` (`idProducto` INT NOT NULL AUTO_INCREMENT , `DescripcionProducto` VARCHAR(30) NOT NULL , PRIMARY KEY (`idProducto`)) ENGINE = InnoDB;

ALTER TABLE `usuarios` ADD `tipoUsuarioId` INT NOT NULL AFTER `CorreoUsuario`, ADD INDEX (`tipoUsuarioId`);

ALTER TABLE `usuarios` ADD `tipoPeloId` INT NOT NULL AFTER `tipoUsuarioId`, ADD `SedeId` INT NULL AFTER `tipoPeloId`, ADD INDEX (`tipoPeloId`), ADD INDEX (`SedeId`);

ALTER TABLE `barberos` ADD `tipoUsuarioId` INT NOT NULL AFTER `CorreoBarbero`, ADD `SedeId` INT NOT NULL AFTER `tipoUsuarioId`, ADD INDEX (`tipoUsuarioId`), ADD INDEX (`SedeId`);

ALTER TABLE `producto` ADD `usuarioId` INT NOT NULL AFTER `Precio`, ADD `BarberoId` INT NOT NULL AFTER `usuarioId`, ADD `tipoProductoId` INT NOT NULL AFTER `BarberoId`, ADD `FacturaId` INT NOT NULL AFTER `tipoProductoId`, ADD INDEX (`usuarioId`), ADD INDEX (`BarberoId`), ADD INDEX (`tipoProductoId`), ADD INDEX (`FacturaId`);