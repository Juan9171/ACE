import React from 'react';
import '../Styles/Estiloslogin.css'
import Image from '../Assets/Imagenes/Usuario.jpg'
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
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

    const onSuccess = (googleUser) => {
        setIsLoggedIn(true);
        const profile = googleUser.getBasicProfile();
        setName(profile.getName());
        setEmail(profile.getEmail());
        setImageUrl(profile.getImageUrl());
    };

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

    const {register, handleSubmit} = useForm();
    const onSubmit =(d) => 
    alert(JSON.stringify(d));

    return (
        
        <div className="contenedor">
            <div className="login-box">

                <form onSubmit={handleSubmit(onSubmit)}>

                    {!isLoggedIn &&

                        <div>
                            <img src={Image} className="avatar" alt="Avatar Image" />
                            <h1>Iniciar Sesion</h1>
                            <input type="text" placeholder="Ingrese su nombre" {...register("Usuario")} />

                            <input type="password" placeholder="Ingrese su contraseña" {...register("Contraseña")}  />

                            <input type="submit" value="Iniciar Sesion" id="Boton" />
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
                            <input type="submit" value="cerrar sesion" id='Boton' onClick={logOut} />
                            <a href="/inicio">Ingresar</a>
                        </div>
                    }

                </form>
            </div>
        </div>
        


    )

}


export default Formulario;