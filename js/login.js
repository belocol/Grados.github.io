import { loginValidation } from "../js/firebase.js";
import { db } from "./firebase.js";
//import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";

const evento = document.getElementById("login");

async function login(){
    const user = document.getElementById("edtuser").value;
    const pass = document.getElementById("edtpass").value;
    
    const sesion = loginValidation(user,pass);

    const validation = await sesion;

    if (validation != null) {
        alert("Inicio de sesion exitoso: "+user);
        if(user==="admin@unitropico.edu.co"){
            window.location.href="buscar_admin.html";
        }
        else{
            window.location.href="formulario.html"
        }
        /* else if (user==!"admin@unitropico.edu.co"){
            window.location.href="formulario.html"
        } *//* else{
            getDetails(user.value)
        } */
        
    }else{
        
        alert("Error al Ingresar");
    }
   
    

    
    
}

window.addEventListener('DOMContentLoaded', async()=>evento.addEventListener('click',login))

/* const getDetails = async (correo_institucional) =>{
   
    const docRef = doc(db, "Solicitudes_Grados",correo_institucional);
    const docSnap = await getDoc(docRef);

    getDetails(user.value)

    if(docSnap().exist){
      
        window.location.href="procesar_solicitud.html";
    } 
}  */



    