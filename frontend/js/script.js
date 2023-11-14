import {
  validarTipoDocumento,
  validarProceso,
  validarCodigo,
  validarNombre,
  validarContenido,
} from "../js/validaciones.js";

const ducumet_type = document.getElementById("document_type");
const procsses = document.getElementById("processe");
const code = document.getElementById("code");
const nameDocument = document.getElementById("name");
const content = document.getElementById("content");
const btnSave = document.getElementById("btnSave");
const btnEdit = document.getElementById("btnEdit");
const btnCerrarSesion = document.getElementById("btnCerrarSesion");
btnEdit.disabled = true;


let idDocumento;

function save() {
  btnSave.addEventListener("click", function () {
    const ducumet_type = document.getElementById("document_type").value;
    const procsses = document.getElementById("processe").value;
    const code = document.getElementById("code").value;
    const nameDocument = document.getElementById("name").value;
    const content = document.getElementById("content").value;

    if (
      validarTipoDocumento(ducumet_type) &&
      validarProceso(procsses) &&
      validarCodigo(code) &&
      validarNombre(nameDocument) &&
      validarContenido(content)
    ) {
      const data = `api=documents-create&document_type_id=${ducumet_type}&processe_id=${procsses}&code=${code}&name=${nameDocument}&content=${content}`;
      const url =
        "http://localhost/documents-app/backend/?api=documents-create";

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
          if (resp.status) {
            alert("Documento guardado exitosamente.");
            cargarTabla();
          } else {
            alert("Error al guardar el Documento.");
          }
        }
      };
    }
  });
}

function cargarTabla() {
  const tabla = document.getElementById("tablaDocumentos");
  const url = "http://localhost/documents-app/backend/?api=documents-get";

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
      const resp = JSON.parse(xhr.responseText);
      const documentos = resp.data;

      let tableDocuments = `<table class="table">
        <thead class="thead-dark">
            <tr>
                <th>ID</th>
                <th>Tipo Doc</th>
                <th>Proceso</th>
                <th>Código</th>
                <th>Nombre</th>
                <th>Contenido</th>
                <th>Actualización</th>
                <th>Editar</th>
                <th>Eliminar</th>

            </tr>
        </thead>
        <tbody>`;

      documentos.forEach((documento) => {
        tableDocuments += `
            <tr>
                <td>${documento.id}</td>
                <td>${documento.document_type.name}</td>
                <td>${documento.process.name}</td>
                <td>${documento.code}</td>
                <td>${documento.name}</td>
                <td>${documento.content}</td>
                <td>${documento.created_at}</td>
                <td><button class="btnEditarDocument" title="">📝</button></td>
                <td><button class="btnEliminar" title="">❌</button></td>
            </tr>`;
      });

      tableDocuments += `</tbody></table>`;
      tabla.innerHTML = tableDocuments;

      ducumet_type.value = "";
      procsses.value = "";
      code.value = "";
      nameDocument.value = "";
      content.value = "";

      botonesEditar();
      eliminarDocumento();
    }
  };
}

function editarDocumento() {
  btnEdit.addEventListener("click", function () {
    const docTipo = ducumet_type.value;
    const docProceso = procsses.value;
    const docCodigo = code.value;
    const docNombre = nameDocument.value;
    const docContenido = content.value;
    const idDocumentoEdit = idDocumento;

    if (
      validarTipoDocumento(docTipo) &&
      validarProceso(docProceso) &&
      validarCodigo(docCodigo) &&
      validarNombre(docNombre) &&
      validarContenido(docContenido)
    ) {
      const data = `api=documents-update&id=${idDocumentoEdit}&document_type_id=${docTipo}&processe_id=${docProceso}&code=${docCodigo}&name=${docNombre}&content=${docContenido}`;
      const url = `http://localhost/documents-app/backend/?api=documents-update`;

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

          if (resp.status) {
            alert("Documento editado exitosamente.");
            cargarTabla();
            btnSave.disabled = false;
            btnEdit.disabled = true;
          } else {
            alert("Error al editar documento.");
          }
        }
      };
    }
  });
}

function botonesEditar() {
  const btnEditar = document.querySelectorAll(".btnEditarDocument");

  btnEditar.forEach((btn) => {
    btn.addEventListener("click", function () {
        btnSave.disabled = true;
        btnEdit.disabled = false;

      const fila = this.closest("tr");

      const idDoc = fila.querySelector("td:nth-child(1)").innerText;
      const tipo = fila.querySelector("td:nth-child(2)").innerText;
      const proceso = fila.querySelector("td:nth-child(3)").innerText;
      const codigo = fila.querySelector("td:nth-child(4)").innerText;
      const nombre = fila.querySelector("td:nth-child(5)").innerText;
      const contenido = fila.querySelector("td:nth-child(6)").innerText;
      seleccionTipoProceso("document_type", tipo);
      seleccionTipoProceso("processe", proceso);
      code.value = codigo;
      nameDocument.value = nombre;
      content.value = contenido;
      idDocumento = idDoc;
    });
  });
}

function eliminarDocumento() {
  const btnEliminar = document.querySelectorAll(".btnEliminar");
  const idDocumentoDelete = idDocumento;
  btnEliminar.forEach((btn) => {
    btn.addEventListener("click", function () {
      const fila = this.closest("tr");

      const idDoc = fila.querySelector("td:nth-child(1)").innerText;

      idDocumento = idDoc;

      const data = `api=documents-delete&id=${idDocumento}`;
      const url = `http://localhost/documents-app/backend/?api=documents-delete`;

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
          cargarTabla();
          if (resp.status) {
            alert("Documento Eliminado con éxito");
          } else {
            alert("Error al eliminar Documento");
          }
        }
      };
    });
  });
}

function seleccionTipoProceso(elemento, valor) {
  const select = document.getElementById(elemento);
  for (let i = 0; i < select.options.length; i++) {
    if (select.options[i].text === valor) {
      select.selectedIndex = i;
      break;
    }
  }
}

function cerrarSesion() {
  btnCerrarSesion.addEventListener("click", function () {
    localStorage.removeItem("authToken");
    window.location.href = "pages/login.html";
  });
}

save();
cargarTabla();
editarDocumento();
cerrarSesion();
