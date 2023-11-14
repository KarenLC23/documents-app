
import {
  validarNombreUser,
  validarPassword,
} from "../js/validaciones.js";

const btnEntrar = document.getElementById("btnEntrar");


function entrar() {
  btnEntrar.addEventListener("click", function () {

   
    const nameUser = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    if(validarNombreUser(nameUser) && validarPassword(password)){

    const data = `api=users-get-by-name&user_name=${nameUser}&password=${password}`;
    const url = "http://localhost/documents-app/backend/?api=users-get-by-name";

    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader(
      "content-type",
      "application/x-www-form-urlencoded; charset=UTF-8"
    );
    xhr.send(data);
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        const resp = JSON.parse(xhr.responseText);
        console.log(resp);
        if (resp.status) {
          console.log(resp.status);
          const usuario = resp.data;
          const token = generarToken(usuario);
          console.log(token);
        
          localStorage.setItem('authToken', token);
          window.location.href = '../index.html';

        } else {
          console.log(resp.status);
        }
      }
    };
  }
  });
}


function generarToken(usuario) {
    const tokenPayload = {
      usuario: usuario,
      expira: Date.now() + 3600000 
    };
    const token = JSON.stringify(tokenPayload);
    return token;
  }
  
  entrar();