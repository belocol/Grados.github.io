//import { registerUser } from "./firebase.js";//crear usuario
import { registerSetDoc } from "./firebase.js";//enviar los datos del usuario a la base de datos
import { db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";



const form = document.getElementById("f1");

form.addEventListener('submit',(evento)=>{
    evento.preventDefault();


    const nombre = document.getElementById("nombres");
    const apellido = document.getElementById("apellidos");
    const tipo_identificacion =document.getElementById("tipoIdentificacion");
    const num_identificacion =document.getElementById("numIdentificacion");
    const pais =document.getElementById("PaisNacimiento");
    const departamento =document.getElementById("departamentos");
    const ciudad =document.getElementById("minucipios");
    const residencia =document.getElementById("Residencia");
    const direccion =document.getElementById("Direccion");
    const barrio =document.getElementById("Barrio");
    const programa_academico =document.getElementById("ProgramaAcademico");
    const titulo =document.getElementById("TituloOptar");
    const nivel_acamedico =document.getElementById("NivelAcademico");
    const fecha_ingreso =document.getElementById("Fechaingreso");
    const periodo_ingreso =document.getElementById("Periodoingreso");
    const fecha_salida =document.getElementById("Fechasalida");
    const periodo_salida =document.getElementById("PeriodoSalida");
    const correo_institucional =document.getElementById("correoInstitucional");

    
    registroAuth(nombre.value,apellido.value,correo_institucional.value,tipo_identificacion.value,
        num_identificacion.value,
        pais.value,departamento.value,ciudad.value,residencia.value,barrio.value,direccion.value,
        programa_academico.value,titulo.value,nivel_acamedico.value,fecha_ingreso.value,
        periodo_ingreso.value,fecha_salida.value,periodo_salida.value,
        fecha_salida.value)

        
});



 async function registroAuth(nombre,apellido,correo_institucional ,tipo_identificacion,num_identificacion,
    pais,departamento,ciudad,residencia,barrio,direccion,programa_academico,titulo,nivel_acamedico,fecha_ingreso,periodo_ingreso,
    periodo_salida,fecha_salida ){
    try{
        
        registerSetDoc(nombre,apellido,correo_institucional,tipo_identificacion,num_identificacion,
            pais,departamento,ciudad,residencia,barrio,direccion,programa_academico,titulo,nivel_acamedico,fecha_ingreso,periodo_ingreso,
            fecha_salida,periodo_salida)
        
        alert("Su solicitud será procesada")
        
        
    }
    catch (error){
        console.log("el error es  :"+error.code)
    }
} 

