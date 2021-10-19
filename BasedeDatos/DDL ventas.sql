DROP DATABASE IF EXISTS tiendademoda;
CREATE DATABASE tiendademoda;
USE tiendademoda;

CREATE TABLE Estado (
   idestado INT NOT NULL,
   estado VARCHAR(50) NOT NULL,
    PRIMARY KEY (idestado)
);
CREATE TABLE Rol (
   idRol INT NOT NULL,
   rol VARCHAR(50) NOT NULL,   
   PRIMARY KEY ( idRol )
);

CREATE TABLE Usuarios (	
   idUsuario INT NOT NULL AUTO_INCREMENT,
   nombres VARCHAR(50) NOT NULL,
   rolU INT NOT NULL,
	estadoU INT NOT NULL,
	PRIMARY KEY ( idUsuario ),
    FOREIGN KEY (rolU) REFERENCES Rol(idRol),
    FOREIGN KEY (estadoU) REFERENCES Estado(idestado)
);

CREATE TABLE Producto (
   idProducto INT NOT NULL AUTO_INCREMENT,
   valor INT NOT NULL,
   estado VARCHAR(50) NOT NULL,
   descripcion VARCHAR(50) NOT NULL,
   PRIMARY KEY ( idProducto )
);

CREATE TABLE Venta (
	idVenta INT NOT NULL AUTO_INCREMENT,
	idProducto_FK INT NOT NULL,   
   valor_total VARCHAR(50) NOT NULL,
   identificador VARCHAR(50) NOT NULL,
   cantidad INT NOT NULL,
   precio INT NOT NULL,
   fecha VARCHAR(50) NOT NULL,
   docu_cliente INT NOT NULL,
   nom_cliente VARCHAR(50) NOT NULL,
   vendedor VARCHAR(50) NOT NULL,
   estado VARCHAR(50) NOT NULL,
   PRIMARY KEY ( idVenta ),
   FOREIGN KEY (idProducto_FK) REFERENCES Producto(idProducto)   
);