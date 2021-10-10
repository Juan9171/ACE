import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableCell, Table, TableContainer, TableRow, TableBody, TableHead } from '@material-ui/core';
import { Button, Input } from '@material-ui/core';

const obtenerEstilos = makeStyles(theme => ({
    tablaBusqueda: {
        tableLayout: "fixed",
        width: "100%",
        borderCollapse: "collapse",
        border: "none",
        fontFamily: "sans-serif",
        backgroundColor: "#F1DABF",
        fontSize: "19px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "0px",
        borderSpacing: "0px"
    },
    contenedorDeBusqueda1: {
        height: "60px",
        width: "400px",
        backgroundColor: "white",
        position: "relative",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-evenly"
    },

    contenedorBusqueda: {
        background: "#F1DABF",
        top: "15%",
        left: "30%",
        right: "30%",
        position: "absolute",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        fontSize: "19px",
        fontFamily: "sans-serif",
        fontWeight: "lighter",
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
        top: "0px",
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
        top: "150px",
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
    menuBusqueda: {
        backgroundColor: "#F1DABF",
        top: "150px",
        height: "100%",
        width: "100%",
        position: "absolute",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    linea: {
        height: "3px",
        backgroundColor: "gray",
        top: "280px",
        left: "25%",
        right: "25%",
        position: "absolute",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-evenly"
    }

}));

const menuBusqueda = () => {
    const estilos = obtenerEstilos();
    return (
        <div className={estilos.menuBusqueda}>
            <div className={estilos.BarraTitulo}>
                <img src={require("./Imagenes/3665416.png").default} width="50px" height="50px" />
                VENTA
            </div>

            <div className={estilos.contenedorBusqueda}>
                <Table>
                    <TableRow>
                        <TableCell>
                            ID
                        </TableCell>
                        <TableCell>
                            DOCUMENTO DE IDENTIFICACION
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <Input type="text" placeholder="Ingresar ID" required />
                        </TableCell>
                        <TableCell>
                            <div className={estilos.contenedorDeBusqueda1}></div>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            VALOR TOTAL
                        </TableCell>
                        <TableCell>
                            NOMBRE DEL CLIENTE
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <div className={estilos.contenedorDeBusqueda1}></div>
                        </TableCell>
                        <TableCell>
                            <div className={estilos.contenedorDeBusqueda1}></div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            IDENTIFICADOR
                        </TableCell>
                        <TableCell>
                            VENDEDOR ENCARGADO
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <div className={estilos.contenedorDeBusqueda1}></div>
                        </TableCell>
                        <TableCell>
                            <div className={estilos.contenedorDeBusqueda1}></div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            CANTIDAD
                        </TableCell>
                        <TableCell>
                            <li>
                                ESTADO DE VENTA
                            </li>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <div className={estilos.contenedorDeBusqueda1}></div>
                        </TableCell>
                        <TableCell>
                            <div className={estilos.contenedorDeBusqueda1}></div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <li>
                                PRECIO UNITARIO
                            </li>
                        </TableCell>
                        <TableCell>
                            <li>
                                FECHA DE VENTA
                            </li>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <div className={estilos.contenedorDeBusqueda1}></div>
                        </TableCell>
                        <TableCell>
                            <div className={estilos.contenedorDeBusqueda1}></div>
                        </TableCell>
                    </TableRow>
                </Table>
            </div>
        </div>
    )
}

export default menuBusqueda;