# Registro de Documentos App

Bienvenido a Document-App 🚀

Document-App te permite gestionar tus documentos mediante operaciones CRUD (Crear, Editar, Eliminar) y presenta una interfaz amigable implementada con PHP y arquitectura multicapa.

## Credenciales de Acceso

Para acceder a la aplicación, utiliza las siguientes credenciales:

- **Usuario:** karen
- **Contraseña:** 1234

## Características Principales

- Login de Usuario: Accede a la aplicación utilizando las credenciales proporcionadas.
- Logout de Usuario: Cierra sesión.
- Tabla de Datos: Visualiza todos los registros de documentos en una tabla organizada.
- Creación de Documentos: Registra nuevos documentos.
- Edición de Documentos: Actualiza la información de los documentos existentes.
- Eliminación de Documentos: Elimina registros de documentos de manera segura.

## Modelo de Datos

### Tabla PROCESSES

| id           | prefix       |name          |
|--------------|--------------|--------------|
| 1            | ING          | INGENIERÍA   |
| 2            | DEV          | Desarrollo   |
| 3            | APR          | Aprobación   |
| 4            | REV          | Revisión     |
| 5            | ERC          | Archivo      |



### Tabla TYPE DOCUMENT
| id           | prefix       |name                             |
|--------------|--------------|---------------------------------|
| 1            | INS          | INSTRUCTIVO                     |
| 2            | MNU          | Manual de Usuario               |
| 3            | INF          | Informe Técnico                 |  
| 4            | POE          | Procedimiento Operativo Estándar|
| 5            | PSE          | Política de Seguridad           |


### Tabla DOCUMENT
### Tabla TYPE DOCUMENT
| id| document_id|processe |code       |name                                     |content                                 |
|---|------------|---------|-----------|-----------------------------------------|----------------------------------------|
| 1 | INS        | 1       |INS-ING-1  |Instructivo de desarrollo                |Contenido del instructivo de desarrollo |
| 2 | MNU        | 2       |MNU-DEV-2  |Sistema Ventas                           |Guía para usar el sistema de ventas     |
| 3 | INF        | 3       |INF-APR-3  |Informe Técnico de Pruebas de Seguridad  |Resultados de pruebas de seguridad.     |
| 4 | POE        | 4       |POE-REV-4  |Procedimiento Operativo Estándar         |Instrucciones para atención al cliente.  |
| 5 | PSE         | 5      |PSE-ARC-5  |Política de Seguridad de Datos           |Normas de seguridad de datos.           |

## Instalación y Uso
1. Clona este repositorio.
2. Configura tu base de datos.
3. ¡Inicia sesión y comienza a gestionar tus documentos!



## Tecnologías Utilizadas
- PHP
- Arquitectura multicapa
- MySql



## Licencia

Este proyecto es creado y mantenido por Karen Caicedo. Todos los derechos reservados.

## Contacto
Para preguntas o colaboraciones, puedes contactarme a través de klcaicedo93@gmail.com
