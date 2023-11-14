<?php

/**
 * https://pipe.proes.io/documentacion/5.x/modelos-y-constructor-de-consultas/
 */

 namespace App\Models;

 use PIPE\Clases\Modelo;

 
 class User extends Modelo 
 {
     /**
      * Timestamp for record creation.
      *
      * @var string
      */
     public $creadoEn = 'created_at';
 
     /**
      * Timestamp for record update.
      *
      * @var string
      */
     public $actualizadoEn = 'updated_at';
 
 }
 