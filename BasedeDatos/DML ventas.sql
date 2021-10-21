INSERT INTO Estado (idestado,estado) VALUES (1, 'pediente');
#INSERT INTO Estado (idestado,estado,idUsuario_FK ) VALUES (1, 'pediente',2);
INSERT INTO Estado (idestado,estado) VALUES (2, 'aceptado');
#INSERT INTO Estado (idestado,estado,idUsuario_FK ) VALUES (2, 'aceptado',4);
INSERT INTO Estado (idestado,estado) VALUES (3, 'no aceptado');
#INSERT INTO Estado (idestado,estado,idUsuario_FK ) VALUES (3, 'no aceptado',6);
#INSERT INTO Estado (idestado,estado,idUsuario_FK ) VALUES (2, 'aceptado',7);

INSERT INTO Rol (idRol,rol) VALUES (1, 'vendedor');
INSERT INTO Rol (idRol,rol) VALUES (2, 'administrativo');
INSERT INTO Rol (idRol,rol) VALUES (3, 'cliente');

INSERT INTO Usuarios (idUsuario,nombres, rolU, estadoU) VALUES (1,'Juan Rodríguez',1,2);
INSERT INTO Usuarios (idUsuario,nombres, rolU, estadoU ) VALUES (2,'Juan Gomez',1,1);
INSERT INTO Usuarios (idUsuario,nombres, rolU, estadoU ) VALUES (3,'Camila Rodríguez',2,2);
INSERT INTO Usuarios (idUsuario,nombres, rolU, estadoU ) VALUES (4,'Sebastian Bonilla',2,3);
INSERT INTO Usuarios (idUsuario,nombres, rolU, estadoU ) VALUES (5,'Luisa Gomez',1,3);
INSERT INTO Usuarios (idUsuario,nombres, rolU, estadoU ) VALUES (6,'Fernando Vazques',1,3);
INSERT INTO Usuarios (idUsuario,nombres, rolU, estadoU ) VALUES (7,'Daniela Delgado',2,3);




#INSERT INTO Rol (idRol,rol,idUsuario_FK,idestado_FK2 ) VALUES (1, 'vendedor',4);
#INSERT INTO Rol (idRol,rol,idUsuario_FK,idestado_FK2 ) VALUES (1, 'vendedor',5);
#INSERT INTO Rol (idRol,rol,idUsuario_FK,idestado_FK2 ) VALUES (3, 'cliente',6);
#INSERT INTO Rol (idRol,rol,idUsuario_FK,idestado_FK2 ) VALUES (3, 'cliente',7);

INSERT INTO Producto (idProducto,valor,estado,descripcion) VALUES (1, 200000,'disponible','zapato');
INSERT INTO Producto (idProducto,valor,estado,descripcion) VALUES (2, 780000,'no disponible','camisa amarilla');
INSERT INTO Producto (idProducto,valor,estado,descripcion) VALUES (3, 40000,'disponible', 'pantalon');
INSERT INTO Producto (idProducto,valor,estado,descripcion) VALUES (4, 50000,'no disponible', 'falda larga');
INSERT INTO Producto (idProducto,valor,estado,descripcion) VALUES (5, 60000,'disponible', 'buso azul');
INSERT INTO Producto (idProducto,valor,estado,descripcion) VALUES (6, 31233,'disponible','polo');
INSERT INTO Producto (idProducto,valor,estado,descripcion) VALUES (7, 24234,'no disponible','bufanda');

INSERT INTO Venta (idVenta,valor_total,identificador,cantidad,precio,fecha,docu_cliente,nom_cliente,vendedor,idProducto_FK,estado) VALUES (1, 20000089,56,12,100000,"15/05/2021",12235,"Daniela","Luisa",1,"En Proceso");
INSERT INTO Venta (idVenta,valor_total,identificador,cantidad,precio,fecha,docu_cliente,nom_cliente,vendedor,idProducto_FK,estado) VALUES (2, 34320089,56,12,100000,"15/05/2021",12235,"Daniela","Luisa",4,"Cancelado");
INSERT INTO Venta (idVenta,valor_total,identificador,cantidad,precio,fecha,docu_cliente,nom_cliente,vendedor,idProducto_FK,estado) VALUES (3, 242323089,56,12,100000,"24/06/2021",12235,"Daniela","Luisa",3,"En Proceso");