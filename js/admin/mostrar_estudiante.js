import { db ,borrar_usuario,getTask }from "../firebase.js";
import { collection, getDocs  } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
import "../usuario/registrar_info.js"


const querySnapshot = await getDocs(collection(db, "Solicitudes_Grados"));
const tabla = document.getElementById('cuerpoTabla');


querySnapshot.forEach((doc) => {
    
    const row = tabla.insertRow();
    const registros = doc.data();
    row.innerHTML= `
    <tr>
        <td scope="row">${registros.nombre + " " +registros.apellido }</td>
        <td >${registros.correo_institucional}</td>
        <td >${registros.tipo_identificacion}</td>
        <td >${registros.num_identificacion}</td>
        <td >${registros.programa_academico}</td>
        <td >${registros.nivel_acamedico}</td>


    </tr>

    <tr>
                       
                        <td>
                            <button class="btn_borrar" data-id="${doc.id}">Borrar</button>
                            <button class="btn_editar" data-id="${doc.id}">Editar</button>
                            <button class="btn_actualizar" data-id="${doc.id}">Actualizar</button>
                            <input style="opacity:1;" type="checkbox" data-required="1" name="terminos"><p style="color:black;padding-left:20px;</p>

                            
                        </td>
                    </tr>  
    
                    
    
                    `;
  
    cuerpoTabla.innerHTML;
//PARTE DE BORRAR 
    const btn_borrar= cuerpoTabla.querySelectorAll(".btn_borrar")
   
    btn_borrar.forEach(btn=>{
        btn.addEventListener("click",async (event)=>{

        
            try {
                borrar_usuario(event.target.dataset.id)
                alert("Usuario "+event.target.dataset.id +" eliminado")
                window.location.href("buscar_admin.html")
              } catch (error) {
                console.log(error);
              }
        })

    })

//PARTE DE EDITAR
/* const btn_editar= cuerpoTabla.querySelectorAll(".btn_editar")

btn_editar.forEach(btn=>{
    btn.addEventListener("click",async (event)=>{

       
        try {
            const doc= await getTask(event.target.dataset.id)
            const Task =doc.data()

            f1['nombres'].value = Task.registros.cregistros.nombre + " " +registros.apellido 

          } catch (error) {
            console.log(error);
          }
    })

}) */



});

