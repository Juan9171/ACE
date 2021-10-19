USE tiendademoda;

-- ** Procedimiento almacenado para listar Productos
DELIMITER //
CREATE PROCEDURE spListarProductos()
BEGIN
	SELECT idProducto, valor, estado, descripcion
		FROM Producto
		ORDER BY idProducto;
END//

-- ** Procedimiento almacenado para listar Usuarios
DELIMITER //
CREATE PROCEDURE spListarUsuarios()
BEGIN
	SELECT idUsuario, nombres, rolU, estadoU
		FROM Usuarios
		ORDER BY idUsuario;
END//

-- ** Procedimiento almacenado para listar Ventas
CREATE PROCEDURE spListarVentas()
BEGIN
	SELECT idProducto_FK, idVenta, valor_total, identificador, cantidad, fecha, precio, docu_cliente, nom_cliente, vendedor, estado
		FROM Venta
		ORDER BY idVenta;
END//


-- ** Procedimiento almacenado para agregar o modificar Producto
CREATE PROCEDURE spActualizarProducto(
IN Id int,
IN valor varchar(50),
IN estado varchar(50),
IN descripcion varchar(50)
)
BEGIN
	IF Id<=0 THEN
		INSERT INTO Producto 
			(
			valor, estado, descripcion
			)
			VALUES(
			valor, estado, descripcion
			);
	ELSE
		UPDATE Producto
			SET valor=valor,
			estado=estado, 
			descripcion=descripcion
			WHERE idProducto =  Id;
	END IF;
END//

-- ** Procedimiento almacenado para agregar o modificar Usuario
CREATE PROCEDURE spActualizarUsuario(
IN Id int,
IN nombres varchar(50),
IN rol int,
IN estado int
)
BEGIN
	IF Id<=0 THEN
		INSERT INTO Usuarios 
			(
			nombres, rolU, estadoU
			)
			VALUES(
			nombres,rol,estado
			);
	ELSE
		UPDATE Usuarios
			SET	nombres=nombres,
            rolU=rol,
            estadoU=estado
			WHERE idUsuario =  Id;
	END IF;
END//

-- ** Procedimiento almacenado para agregar o modificar Venta
CREATE PROCEDURE spActualizarVenta(
IN idVent int,
IN idProduct int,
IN valor_tot varchar(50),
IN identifi varchar(50),
IN cantid int,
IN fech varchar(50),
IN price int,
IN docu_clien int,
IN nom_clien varchar(50),
IN vende varchar(50),
IN estad varchar(50)
)
BEGIN
	IF idVent<=0 THEN
		INSERT INTO Venta 
			(
			idProducto_FK, valor_total, identificador, cantidad, fecha, precio, docu_cliente, nom_cliente, vendedor, estado
			)
			VALUES(
			idProduct, valor_tot,identifi,cantid,fech,price,docu_clien,nom_clien,vende,estad
			);
	ELSE
		UPDATE Venta
			SET	idProducto_FK=idProduct,
			valor_total=valor_tot,
            identificador=identifi,
            cantidad=cantid,
            precio=price,
            fecha=fech,
            docu_cliente=docu_clien,
            nom_cliente=nom_clien,
            vendedor=vende,
            estado=estad
			WHERE idVenta =  idVent;
	END IF;
END//