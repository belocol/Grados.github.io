import { registerUser } from "../firebase.js";//crear usuario

import { validacion} from "../validaciones/validar_registro.js";

const form = document.getElementById("f1");

form.addEventListener('submit',(evento)=>{
    evento.preventDefault();

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const email2 = document.getElementById("email2");
    const password2 = document.getElementById("password2");
    
    console.log(nombre.value,apellido.value,email.value,password.value)

    const validar= validacion(nombre.value,apellido.value,email.value,password.value,email2.value,password2.value)
        if(validar==="OK"){
           
            registroAuth(email.value,password.value)
        }else{
            alert(validar)
        }

     
});


async function registroAuth(email,password){
    try{
        
        const registro = await registerUser(email,password)
        console.log(registro)
        
    
        alert("Usuario creado exisotamente")
        window.location.href="login.html";
        form.reset();
    }
    catch (error){
        console.log("el error es  :"+error.code)
        
    }
} 