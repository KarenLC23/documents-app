<?php

namespace App\Controllers;

use App\Traits\Util;
use App\Models\Processe;

class ProcesseController
{
    use Util;

    /**
     * Gets all the data.
     *
     * @return string
     */
    public function getAll()
    {
        $processeses = Processe::todo();

        return $this->response(true, 'OK.', $processeses);
    }
}