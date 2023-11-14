<?php

/**
 * https://pipe.proes.io/documentacion/5.x/configuracion/
 */

require_once __DIR__.'/../vendor/autoload.php';

use PIPE\Clases\Configuracion;

Configuracion::inicializar(
    [
        'BD_CONTROLADOR' => 'mysql',
        'BD_HOST' => 'localhost',
        'BD_PUERTO' => '3306',
        'BD_USUARIO' => 'root',
        'BD_CONTRASENA' => '',
        'BD_BASEDATOS' => 'documents_app',
        'IDIOMA' => 'es',
        'RUTA_MODELOS' => __DIR__.'/../app/Models',
        'ZONA_HORARIA' => 'America/Bogota',
        'COMANDO_INICIAL' => 'set names utf8mb4 collate utf8mb4_unicode_ci',
        'TIPO_RETORNO' => Configuracion::CLASE,
        'OPCIONES' => [PDO::MYSQL_ATTR_LOCAL_INFILE => 1]
    ]
);
