import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableCell, Table, TableContainer, TableRow, TableBody, TableHead } from '@material-ui/core';
import { Button, Input } from '@material-ui/core';

const obtenerEstilos = makeStyles(theme => ({
    contenedorRegistro: {
        height: "150px",
        position: "absolute",
        padding: "0px",
        left: "20%",
        right: "20%",
        top: "0%",
        fontSize: "20px",
        fontFamily: "Arial",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    },

    buscar: {
        height: "50px",
        position: "absolute",
        padding: "0px",
        left: "80%",
        top: "35%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        "&:input": {
            width: "240px"
        }
    },
    inputBuscar: {
        width: "0px",
        height: "40px",
        padding: "0 20px",
        fontSize: "18px",
        color: "#000",
        outline: "none",
        border: "1px solid silver",
        borderRadius: "30px",
        transition: "all 0.6s ease",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        "&:hover": {
            width: "240px"
        },
        "&:focus": {
            width: "240px"
        }
    },
    btn: {
        top: "17px",
        right: "0px",
        backgroundColor: "none",
        position: "absolute",
        width: "10px",
        height: "10px",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    BarraTitulo: {
        height: "150px",
        background: "none",
        top: "30%",
        left: "40%",
        right: "40%",
        position: "absolute",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        fontSize: "19px",
        fontFamily: "Arial",
        fontWeight: "bold",
        padding: "0px",
    },
    contenedorEstado: {
        background: "none",
        top: "45%",
        left: "5%",
        right: "5%",
        position: "absolute",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        fontSize: "19px"
    },
    tablaEstado: {
        tableLayout: "fixed",
        width: "100%",
        borderCollapse: "collapse",
        border: "none",
        fontfamily: "sans-serif",
        backgroundcolor: "white",
        cursor: "pointer",
        fontsize: "15px",
        justifyContent: "space-evenly",
    },
    Inicio: {
        backgroundColor: "#F1DABF",
        top: "150px",
        height: "100%",
        width: "100%",
        position: "absolute",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    contenedorEditor1: {
        background: "#F1DABF",
        top: "10%",
        left: "5%",
        right: "50%",
        position: "absolute",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        fontSize: "19px",
        fontFamily: "sans-serif",
        fontWeight: "lighter",
        "&:input": {
            width: "200px",
            height: "40px",
            padding: "0 20px",
            fontSize: "19px",
            color: "#000",
            outline: "none",
            border: "1px solid silver",
            borderRadius: "30px",
            textAlign: "center",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center"
        },
        "&:select": {
            width: "240px",
            height: "40px",
            padding: "0 20px",
            fontSize: "19px",
            color: "#000",
            outline: "none",
            border: "1px solid silver",
            borderRadius: "30px",
            textAlign: "center",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center"
        }
    },
    contenedorEditor2: {
        background: "#F1DABF",
        top: "10%",
        left: "50%",
        right: "5%",
        position: "absolute",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        fontSize: "19px",
        fontFamily: "sans-serif",
        fontWeight: "lighter",
        "&:input": {
            width: "200px",
            height: "40px",
            padding: "0 20px",
            fontSize: "19px",
            color: "#000",
            outline: "none",
            border: "1px solid silver",
            borderRadius: "30px",
            textAlign: "center",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center"
        },
        "&:select": {
            width: "240px",
            height: "40px",
            padding: "0 20px",
            fontSize: "19px",
            color: "#000",
            outline: "none",
            border: "1px solid silver",
            borderRadius: "30px",
            textAlign: "center",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center"
        }
    },
    botonActualizar: {
        position: "absolute",
        fontSize: "19px",
        padding: "16px 32px",
        backgroundColor: "#92817A",
        border: "none",
        color: "white",
        fontFamily: "sans-serif",
        height: "60px",
        width: "150px",
        cursor: "pointer",
        display: "inline-block",
        top: "110%",
        right: "25%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    }

}));

const Inicio = () => {
    const estilos = obtenerEstilos();
    return (
        <div className={estilos.Inicio}>
            <div className={estilos.contenedorRegistro}>ACTUALIZAR DATOS</div>
            <div className={estilos.contenedorEditor1}>
                <table>
                    <tr>
                        <th>
                            ID
                        </th>

                        <th>
                            <input type="number" placeholder="Ingresar datos" required id="numeroID" />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            VALOR TOTAL
                        </th>

                        <th>
                            <input type="number" placeholder="Ingresar datos" required id="VALORTOTAL" />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            IDENTIFICADOR
                        </th>

                        <th>
                            <input type="number" placeholder="Ingresar datos" required id="IDENTIFICADOR" />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            CANTIDAD
                        </th>

                        <th>
                            <input type="number" placeholder="Ingresar datos" required id="CANTIDAD" />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            PRECIO UNITARIO
                        </th>

                        <th>
                            <input type="number" placeholder="Ingresar datos" required id="PRECIOUNITARIO" />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            FECHA DE VENTA
                        </th>

                        <th>
                            <input type="date" placeholder="Ingresar datos" required id="FECHAVENTA" />
                        </th>
                    </tr>
                </table>
            </div>
            <div className={estilos.contenedorEditor2}>
                <table>
                    <tr>
                        <th>
                            DOCUMENTO DE IDENTIFICACION
                        </th>

                        <th>
                            <input type="text" placeholder="Ingresar datos" required id="DOCIDENTIFI" />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            NOMBRE DEL CLIENTE
                        </th>

                        <th>
                            <input type="text" placeholder="Ingresar datos" required id="NOMBRECLIENTE" />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            VENDEDOR ENCARGADO
                        </th>

                        <th>
                            <input type="text" placeholder="Ingresar datos" required id="NOMVENDE" />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            ESTADO DE VENTA
                        </th>

                        <th>
                            <select id="Estado" className={estilos.selectorDeEstado} >
                                <option value="1">En proceso</option>
                                <option value="2">Entregada</option>
                                <option value="3">Cancelada</option>
                            </select>
                        </th>
                    </tr>
                    <Button className={estilos.botonActualizar} component="a" href={"/"}>
                        ACTUALIZAR
                    </Button>
                </table>
            </div>

            <div className={estilos.buscar}>
                <Input className={estilos.inputBuscar} type="text" placeholder="Buscar por ID" required />
                <Button className={estilos.btn} component="a" href={"/menuBusqueda"}>
                    <img src={require("./Imagenes/3665416.png").default} width="30px" height="30px" />
                </Button>
            </div>

            <div className={estilos.BarraTitulo}>
                <img src={require("./Imagenes/1762581.png").default} width="50px" height="50px" />
                HISTORIAL DE ESTADO DE VENTA
            </div>
            <div className={estilos.contenedorEstado}>
                <TableContainer>
                    <Table className={estilos.tablaEstado}>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    ID
                                </TableCell>

                                <TableCell>
                                    VALOR
                                </TableCell>

                                <TableCell>
                                    IDENTIFICADOR TOTAL
                                </TableCell>

                                <TableCell>
                                    CANTIDAD
                                </TableCell>

                                <TableCell>
                                    PRECIO UNITARIO
                                </TableCell>

                                <TableCell>
                                    FECHA DE VENTA
                                </TableCell>

                                <TableCell>
                                    DOCUMENTO DE IDENTIFICACION
                                </TableCell>

                                <TableCell>
                                    NOMBRE DEL CLIENTE
                                </TableCell>

                                <TableCell>
                                    NOMBRE DEL VENDEDOR
                                </TableCell>

                                <TableCell>
                                    ESTADO DE LA VENTA
                                </TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                </TableCell>

                                <TableCell>
                                </TableCell>

                                <TableCell>
                                </TableCell>

                                <TableCell>
                                </TableCell>

                                <TableCell>
                                </TableCell>

                                <TableCell>
                                </TableCell>

                                <TableCell>
                                </TableCell>

                                <TableCell>
                                </TableCell>

                                <TableCell>
                                </TableCell>

                                <TableCell>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div >
    );
}

export default Inicio;