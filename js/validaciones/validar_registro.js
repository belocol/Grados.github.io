export function validacion(nombre,apellido,email,password,email2,password2){
   
    //var expresionEmail = /\w+@\w+.+[a-z]/;
    var expresionNombres= /^[a-z ,.'-]+$/i;
    var expresionNumIdentidad =/^\d{8,10}$/;
    //var expresionpassword= /^(?=.\d)(?=.[a-záéíóúüñ]).[A-ZÁÉÍÓÚÜÑ]/;
    var expresionesemail= /^\w+([.-]?\w+).(?:|com|es)/;


if(nombre==""||apellido==""||email==""||password==""||email2==""||password2=="") {
    return "Por favor rellene todos los campos" ;
}


if(!expresionNombres.test(nombre)){
    return 'Ingrese un nombre valido';
}
if(!expresionNombres.test(apellido)){
    return 'Ingrese un apellido valido';
}


if(!expresionesemail.test(email)){
    return 'Ingrese un correo valido';
}
if(!expresionesemail.test(email2)){
    return 'Ingrese un correo valido';
}

if(email!= email2){
    return 'Los correos no coinciden';
}

if(password!=password2){
    return 'Los contraseñas no coinciden';

}
return "OK"
}