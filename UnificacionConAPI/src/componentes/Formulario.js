import React from 'react';
import '../Styles/Estiloslogin.css'
import Image from '../Assets/Imagenes/Usuario.jpg'
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Cookies from 'universal-cookie'
import axios from 'axios'
import ProductoTabla from './ProductoListado';


const googleClientId = '181976679304-v94cncu4ukqtq6k6961gf5gspuq6nr61.apps.googleusercontent.com';// process.env.REACT_APP_GOOGLE_CLIENT_ID;




const loadGoogleScript = () => {


    (function () {
        const id = 'google-js';
        const src = 'https://apis.google.com/js/platform.js';

        const firstJs = document.getElementsByTagName('script')[0];

        if (document.getElementById(id)) { return; }
        const js = document.createElement('script');
        js.id = id;
        js.src = src;
        js.onload = window.onGoogleScriptLoad;
        firstJs.parentNode.insertBefore(js, firstJs);
    }());

}


const Formulario = () => {



    const [gapi, setGapi] = useState();
    const [googleAuth, setGoogleAuth] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [imageUrl, setImageUrl] = useState();
    const [estado, setEstado] = useState();
    const [rol, setRol]=useState();
    const obtenerEstado = () => {
        return estado;
    }

    const [mostrarBotonIngresar, setMostrarBotonIngresar] = useState(false);
    const mostrarIngresar = (estado) => {
        if (estado == 1 || estado == 3) {
            setMostrarBotonIngresar(false)
        } else {
            setMostrarBotonIngresar(true)
        }

    }

    const onSuccess = async (googleUser) => {
        setIsLoggedIn(true);
        const profile = googleUser.getBasicProfile();
        setName(profile.getName());
        cookie.set('userData', profile);
        setEmail(profile.getEmail());
        setImageUrl(profile.getImageUrl());
        try {
            const res = await axios.get('http://localhost:3010/usuario/find/' + profile.getName());
            var estadoU = res.data.estadoU
            setEstado(estadoU);
            mostrarIngresar(estadoU)
            console.log(res.data);
            var rolU=res.data.rolU;
            setRol(rolU)
        }
        catch (err) {
            if (err.response.status == 500)

                return;

            fetch('http://localhost:3010/usuario',
                {


                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({

                        nombres: profile.getName().split(),
                        rolU: 1,
                        estadoU: 1,
                        idUsuario: -1
                    })
                })
                .then((respuesta) => { console.log(respuesta) })
        }



    };
    const cookie = new Cookies();
    cookie.set('rol',rol,{path:'/'})
    cookie.set('names',name,{path:'/'})
    cookie.set('imageUrl',imageUrl,{path:'/'})
    cookie.set('isLoggedIn',isLoggedIn,{path:'/'})
    
    

    const onFailure = () => {
        setIsLoggedIn(false);
    }

    const logOut = () => {
        (async () => {
            await googleAuth.signOut();
            setIsLoggedIn(false);
            renderSigninButton(gapi);
        })();
    };

    const renderSigninButton = (_gapi) => {
        _gapi.signin2.render('google-signin', {
            'scope': 'profile email',
            'width': 240,
            'height': 50,
            'longtitle': true,
            'theme': 'dark',
            'onsuccess': onSuccess,
            'onfailure': onFailure
        });
    }


    useEffect(() => {
        window.onGoogleScriptLoad = () => {

            const _gapi = window.gapi;
            setGapi(_gapi);

            _gapi.load('auth2', () => {
                (async () => {
                    const _googleAuth = await _gapi.auth2.init({
                        client_id: googleClientId
                    });
                    setGoogleAuth(_googleAuth);
                    renderSigninButton(_gapi);
                })();
            });
        }

        loadGoogleScript();

    }, []);



    return (


        <div className="contenedor">
            <div className="login-box">

                <form >

                    {!isLoggedIn &&

                        <div>
                            <img src={Image} className="avatar" alt="Avatar Image" />
                            <h1>Iniciar Sesion</h1>
                            <div id="google-signin"></div>
                        </div>
                    }

                    {isLoggedIn &&
                        <div>
                            <div>
                                <img src={imageUrl} className="avatar" />
                            </div>
                            <h1>{name} </h1>
                            <h1>{email}</h1>
                            <input type="submit" value="Cerrar sesión" id='Boton' onClick={logOut} />
                            {mostrarBotonIngresar ? (
                                <div className="ingresare">
                                <a href="/inicio">Ingresar</a>
                                </div>
                            ) : (
                                <div>La persona no está autorizada</div>
                            )
                            }
                        </div>
                    }

                </form>
            </div>
        </div>



    )

}


export default Formulario;
