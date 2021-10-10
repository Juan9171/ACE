import React, { useState } from 'react';
import { AppBar, Toolbar, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const obtenerEstilos = makeStyles(
    (tema) => ({

        barraSuperior: {
            background: '#000',
            height: '150px'
        },
        botonMenu: {
            marginRight: tema.spacing(2),
            height: "150px",
            width: "200px",
            color: "white",
            transitionDuration: "0.4s",
            display: "inline - block",
            "&:hover": {
                background: "#555555",
                color: "white",
                textShadow: "1px 1px 6px #fff",
                transition: "all 0.2s ease"
            },
            "&:active": {
                boxShadow: "inset 0px 4px 16px #FFFFFF",
                transform: "translateY(1px)"
            },
        },
        menuSuperior: {
            textAlign: "center",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
        }

    })
);


const ListaPrincipal = () => {
    const estilos = obtenerEstilos();

    return (
        <AppBar position="static" className={estilos.barraSuperior}>
            <Toolbar className={estilos.menuSuperior}>
                <Button position="static" className={estilos.botonMenu} component="a" href={"/"}>
                    Administrador de ventas
                </Button>

                <Button className={estilos.botonMenu}>
                    Administrador de productos
                </Button>
                <Button className={estilos.botonMenu} component="a" href={"/gestorUsuario"}>
                    Gestion de Usuarios/Roles
                </Button>
            </Toolbar>
        </AppBar>
    )

}

export default ListaPrincipal