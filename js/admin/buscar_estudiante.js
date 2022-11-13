
import { db } from "../firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";

    
export const getDetails = async (correo_institucional) =>{
    const card = document.getElementById('MostrarInfo');
    const docRef = doc(db, "Solicitudes_Grados",correo_institucional);
    
    const docSnap = await getDoc(docRef);
    
    VerInfo(docSnap,card)
    
}

const btn_formulario = document.getElementById("buscar");

btn_formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    const email = document.getElementById('email');
    getDetails(email.value);
    
})


function VerInfo (docSnap,card){
  if (docSnap.exists()) {

    //window.location.href="seleccionar_usuario.html";
    card.innerHTML=`
    <div id="cajas_buscar2">
    <div id="bg1">
    <div class="card-header" >
   
      <h2 class="card-title">${docSnap.data().nombre + " "+docSnap.data().apellido}</h2>
    </div>
    <div class="card-body">
    <div>
      <p class="card-text">Email  : ${docSnap.data().correo_institucional}</p>
      
      <p class="card-text ">Tipo de identificación  : ${docSnap.data().tipo_identificacion}</p>
      <p class="card-text">Numero de identificación: ${docSnap.data().num_identificacion}</p>
      <p class="card-text">Ciudad : ${docSnap.data().departamento + "-"+docSnap.data().ciudad}</p>
      <p class="card-text">Dirección: ${docSnap.data().direccion + "-"+docSnap.data().barrio}</p>
      <p class="card-text">Programa Academico: ${docSnap.data().programa_academico}</p>
      <p class="card-text">Nivel: ${docSnap.data().nivel_acamedico}</p>
      <p class="card-text">Fecha Ingreso: ${docSnap.data().fecha_ingreso + "-"+docSnap.data().periodo_ingreso}</p>
      <p class="card-text">Fecha Salida: ${docSnap.data().fecha_salida + "-"+docSnap.data().periodo_salida}</p>

      </div>
      </div>
      
      <div id="bg">
      <img src="${docSnap.data().imagen_estudiante}" class="img-fluid rounded-start" alt="">
     </div>

    
    </div>
    </div>
   
    `;
    } else {
      card.innerHTML=`
      <div >
        <h3 class="card-title">USUARIO NO ENCONTRADO</h3>
      </div>    
      `
    }
}


