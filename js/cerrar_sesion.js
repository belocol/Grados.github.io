import {auth} from "./firebase.js"


const cerrar_sesion=document.querySelector("#cerrarSesion")
    
cerrar_sesion.addEventListener('click',(evento)=>{

    
    evento.preventDefault();
     
    auth.signOut().then(()=>{
        window.location.href="login.html";
        console.log("Cerrado de sesion exitoso")
    })
    })