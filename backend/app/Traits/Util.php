<?php

namespace App\Traits;

trait Util
{
    /**
     * Formats the response.
     *
     * @param boolean $status  status
     * @param string  $message message
     * @param object  $data    data
     * 
     * @return string
     */
    public function response($status, $message, $data = null)
    {
        header('Content-Type: application/json; charset=utf-8');

        return json_encode(
            [
                'status' => $status,
                'message' => $message,
                'data' => $data
            ]
        );
    }
}
