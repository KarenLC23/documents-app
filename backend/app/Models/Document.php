<?php

/**
 * https://pipe.proes.io/documentacion/5.x/modelos-y-constructor-de-consultas/
 */

namespace App\Models;

use PIPE\Clases\Modelo;
use App\Models\Processe;
use App\Models\DocumentType;

class Document extends Modelo 
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

    /**
     * Sets the relationship belong to one.
     *
     * @var string
     */
    public $perteneceAUno = [
        DocumentType::class => ['nombre' => 'document_type'],
        Processe::class => ['nombre' => 'process']
    ];
}
