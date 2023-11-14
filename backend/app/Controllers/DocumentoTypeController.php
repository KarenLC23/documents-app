<?php

namespace App\Controllers;

use App\Traits\Util;
use App\Models\DocumentType;

class DocumentTypeController
{
    use Util;

    /**
     * Gets all the data.
     *
     * @return string
     */
    public function getAll()
    {
        $documentType = DocumentType::todo();

        return $this->response(true, 'OK.', $documentType);
    }
}