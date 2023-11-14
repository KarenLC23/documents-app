export function validarTipoDocumento(typeDoc) {
  if (typeDoc == "") {
    alert("Seleccione un Tipo de Documento");
    return false
  }else{
    return true
  }
}

export function validarProceso(process) {
    if (process == "") {
      alert("Seleccione un Proceso");
      return false
    }else{
      return true
    }
  }

  export function validarCodigo(codigo){
    if (codigo == "") {
      alert("El campo 'Codigo' es obligatorio");
      return false
    }else{
      return true
    }
  }

  export function validarNombre(nombre){
    if (nombre == "") {
      alert("El campo 'Nombre' es obligatorio");
      return false
    }else{
      return true
    }
  }
  export function validarContenido(contenido){
    if (contenido == "") {
      alert("El campo 'Contenido' es obligatorio");
      return false
    }else{
      return true
    }
  }

  export function validarNombreUser(nombre_user){
    if (nombre_user == "") {
      alert("El 'Nombre de Usuario' es obligatorio");
      return false
    }else{
      return true
    }
  }

  export function validarPassword(password){
    if (password == "") {
      alert("La 'Contraseña' es obligatoria");
      return false
    }else{
      return true
    }
  }