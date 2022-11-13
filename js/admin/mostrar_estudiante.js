import { db } from "../firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";


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
                            <a href="#" class="view" title="View" data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                            <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                        </td>
                    </tr>  
    
                    
    
                    `;
  
});