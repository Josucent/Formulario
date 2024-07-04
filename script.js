function validar() {
let nombre, telefono, correo, confirmarcorreo, cedula, contraseña, confirmarcontraseña;
  nombre = document.getElementById("name").value
  telefono = document.getElementById("number").value
  correo = document.getElementById("email").value
  confirmarcorreo = document.getElementById("confirmemail").value
  cedula = document.getElementById("dni").value
  contraseña = document.getElementById("password").value
  confirmarcontraseña = document.getElementById("confirmpassword").value
  warning = document.getElementById("warn")

  let regexemail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  let regexpass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;
  let regexdni = /^[0-9]{8,12}$/

if(nombre === "" || telefono === "" || correo === "" || confirmarcorreo === "" || cedula === "" || contraseña === "" || confirmarcontraseña === "") {
  warning.innerHTML = "Todos los campos son obligatorios."
  return false;
}
  else if(nombre.length>12 || nombre.length<2) {
    warning.innerHTML = ("El nombre debe contener almenos 2 caracteres y un maximo de 12." )
    return false;
  }
  else if(!regexdni.test(cedula)) {
    warning.innerHTML = ("La cedula debe tener mas de 8 a 12 digitos")
    return false;
  }
  else if(!regexemail.test(correo)) {
    warning.innerHTML = ("El correo es inválido.")
    return false;
  }
  else if(correo !== confirmarcorreo) {
    warning.innerHTML = ("Los correos no coinciden.")
    return false;
  }
  else if(!regexpass.test(contraseña)) {
    warning.innerHTML = ("Contraseña inválida.")
    return false;
  }
  else if(contraseña !== confirmarcontraseña) {
    warning.innerHTML = ("Las contraseñas no coinciden") }
    else {
      warning.style.color = "green"
      warning.innerHTML = ("¡Bienvenido al Sistema!")
      return false;
    }
}

