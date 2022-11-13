// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js';
//metodo para el ingreso de usuarios
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js';
//metodo para usar los servicios de Firestore
import { getFirestore,  setDoc, doc ,collection , addDoc} from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js';


const firebaseConfig = {
  apiKey: "AIzaSyBd3wevdZJUAFVRTOSGuO5CVsmGVTA-P9U",
  authDomain: "desarrollonube-639fd.firebaseapp.com",
  databaseURL: "https://desarrollonube-639fd-default-rtdb.firebaseio.com",
  projectId: "desarrollonube-639fd",
  storageBucket: "desarrollonube-639fd.appspot.com",
  messagingSenderId: "886143206382",
  appId: "1:886143206382:web:737f9fc4439de0b042c4ff"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize Autentication Login
export const auth = getAuth(app);
// Initialize Firestore
export const db = getFirestore(app);

export const loginValidation = (email,password) => signInWithEmailAndPassword(auth, email, password)

export const registerUser = (email,password) => createUserWithEmailAndPassword(auth, email, password)

 export const registerSetDoc = (nombre,apellido,correo_institucional,tipo_identificacion,num_identificacion,
  pais,departamento,ciudad,residencia,barrio,direccion,programa_academico,titulo,nivel_acamedico,
  fecha_ingreso,periodo_ingreso, fecha_salida,periodo_salida) => {
  setDoc(doc(db,"Solicitudes_Grados",correo_institucional),{
    nombre,
    apellido,
    correo_institucional,
    tipo_identificacion,
    num_identificacion,
    pais,
    departamento,
    ciudad,
    residencia,
    barrio,
    direccion,
    programa_academico,
    titulo,
    nivel_acamedico,
    fecha_ingreso,
    periodo_ingreso,
    fecha_salida,
    periodo_salida
    
  })


} 