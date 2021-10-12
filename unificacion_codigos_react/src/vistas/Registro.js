import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const obtenerEstilos = makeStyles(theme => ({
    contenedorEditor1: {
        background: "#F1DABF",
        top: "300px",
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
        top: "300px",
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
    Registro: {
        backgroundColor: "#F1DABF",
        top: "150px",
        height: "100%",
        width: "100%",
        position: "absolute",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    selectorDeEstado:{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
      }

}));

const Registro = () => {
    const estilos = obtenerEstilos();
    return (
        <div className={estilos.Registro}>
            <div className={estilos.BarraTitulo}>
                <img src={require("./Imagenes/1608401.png").default} width="50px" height="50px" />
                HISTORIAL DE ESTADO DE VENTA
            </div>
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
        </div>
    )
}

export default Registro;
