import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableCell, Table, TableContainer, TableRow, TableBody, TableHead } from '@material-ui/core';

const obtenerEstilos = makeStyles(theme => ({
    buscar: {
        height: "50px",
        position: "absolute",
        padding: "5px",
        left: "80%",
        top: "50px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        "&:input": {
            width: "240px"
        }
    },
    btn: {
        top: "0",
        right: "0",
        backgroundColor: "#FFF",
        position: "absolute",
        width: "70px",
        height: "70px",
        lineHeight: "55px",
        borderRadius: "50%",
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
    Gestor: {
        backgroundColor: "#F1DABF",
        top: "150px",
        height: "100%",
        width: "100%",
        position: "absolute",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    contenedorROL1: {
        background: "#F1DABF",
        top: "300px",
        left: "10%",
        right: "60%",
        position: "absolute",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        fontSize: "19px",
        fontFamily: "sans-serif",
        fontWeight: "lighter"
    },
    contenedorROL2: {
        background: "#F1DABF",
        top: "300px",
        left: "60%",
        right: "10%",
        position: "absolute",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        fontSize: "19px",
        fontFamily: "sans-serif",
        fontWeight: "lighter"
    }

}));

const Gestor = () => {
    const estilos = obtenerEstilos();
    return (
        <div className={estilos.Gestor}>
            <div className={estilos.buscar}>
                <img src={require("./Imagenes/1608401.png").default} width="50px" height="50px" title="Editar y actualizar" />
            </div>

            <div className={estilos.BarraTitulo}>
                <img src={require("./Imagenes/1762581.png").default} width="50px" height="50px" />
                ROLES Y ESTADOS
            </div>


            <div className={estilos.contenedorROL1}>
                <Table className={estilos.tablaEstado}>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                NOMBRE DEL EMPLEADO O ADMINISTRATIVO
                            </TableCell>

                            <TableCell>
                                ROL
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                            </TableCell>

                            <TableCell>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                            </TableCell>

                            <TableCell>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                            </TableCell>

                            <TableCell>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div className={estilos.contenedorROL2}>
                <Table className={estilos.tablaEstado}>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                NOMBRE DEL USUARIO
                            </TableCell>

                            <TableCell>
                                ESTADO
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                            </TableCell>

                            <TableCell>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                            </TableCell>

                            <TableCell>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                            </TableCell>

                            <TableCell>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default Gestor;