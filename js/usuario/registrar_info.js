import { registerSetDoc } from "../firebase.js";//enviar los datos del usuario a la base de datos

const formu = document.getElementById("f1");
if(formu){
    formu.addEventListener('submit',(evento)=>{
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
        const imagen_estudiante= document.getElementById("response");
    
    
        //console.log(imagen_estudiante.value)
        
        registroAuth(imagen_estudiante.value,nombre.value,apellido.value,correo_institucional.value,tipo_identificacion.value,
            num_identificacion.value,
            pais.value,departamento.value,ciudad.value,residencia.value,barrio.value,direccion.value,
            programa_academico.value,titulo.value,nivel_acamedico.value,fecha_ingreso.value,
            periodo_ingreso.value,fecha_salida.value,periodo_salida.value,
            fecha_salida.value)
    
            //console.log(imagen_estudiante.value)
    });
    
    async function registroAuth(imagen_estudiante,nombre,apellido,correo_institucional ,tipo_identificacion,num_identificacion,
        pais,departamento,ciudad,residencia,barrio,direccion,
        programa_academico,titulo,nivel_acamedico,fecha_ingreso,periodo_ingreso,
        periodo_salida,fecha_salida){
        try{
            
            registerSetDoc(imagen_estudiante,nombre,apellido,correo_institucional,tipo_identificacion,num_identificacion,
                pais,departamento,ciudad,residencia,barrio,direccion,programa_academico,titulo,nivel_acamedico,
                fecha_ingreso,periodo_ingreso,periodo_salida,fecha_salida)
    
                console.log(imagen_estudiante.value)
               
                
                
                alert("Los datos  se han registrado correctamente")
                
     
        }
        catch (error){
            console.log("el error es  :"+error.code)
        }
    } 
}

    



 