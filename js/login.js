import { loginValidation } from "../js/firebase.js";
import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";


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
        }else{
            window.location.href="formulario.html";
        }
        
    }else{
        
        alert("Error al Ingresar");
    }


    


    
     const getDetails = async (user) =>{
        
        const docRef = doc(db, "Solicitudes_Grados",email);
        const docSnap = await getDoc(docRef);
        
        console.log(docSnap)
        
    }


    








}


window.addEventListener('DOMContentLoaded', async()=>evento.addEventListener('click',login))





    