import { AppBar,Toolbar,Button, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
//import ModaLogin from "./login/Login";

const obtenerEstilos =makeStyles(
    (tema)=>({
        botonMenu:{
            marginRight:tema.spacing(2),
            titulo:{
                flexGrow:1,
            }
        }
    })
);

const MenuPrincipal = ()=>{
    return(

        
            <AppBar>
                <Toolbar>
                    <Button>
                        Aministrador de ventas
                    </Button>
                    <Button>
                        Aministrador de  productos
                    </Button>
                    <Button>
                        Gestor de roles/estados
                    </Button>
                </Toolbar>
                
            </AppBar>


    )

}

export default MenuPrincipal