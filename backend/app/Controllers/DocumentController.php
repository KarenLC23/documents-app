<?php

namespace App\Controllers;

use App\Traits\Util;
use App\Models\Document;

class DocumentController
{
    use Util;

    /**
     * Gets all the data.
     *
     * @return string
     */
    public function getAll()
    {
        $documents = Document::relaciones('document_type', 'process')
            ->obtener();

        return $this->response(true, 'OK.', $documents);
    }

    /**
     * Creates the data.
     *
     * @param object $request request
     * 
     * @return string
     */
    public function create($request)
    {
         // validations
        if (empty($request->document_type_id) || empty($request->processe_id) || empty($request->code) || empty($request->name) || empty($request->content)) {
            return $this->response(false, 'All fields are required.');
        }

        $document = Document::crear(
            [
                'document_type_id' => $request->document_type_id,
                'processe_id' => $request->processe_id,
                'code' => $request->code,
                'name' => $request->name,
                'content' => $request->content
            ]
        );

        return $this->response(true, 'document created successfully!', $document);
    }


    public function update($request)
    {

    // validations
    if (empty($request->document_type_id) || empty($request->processe_id) || empty($request->code) || empty($request->name) || empty($request->content)) {
        return $this->response(false, 'All fields are required.');
    }
    
        $document = Document::donde('id = ?', [$request->id])
        ->actualizar([
                'document_type_id' => $request->document_type_id,
                'processe_id' => $request->processe_id,
                'code' => $request->code,
                'name' => $request->name,
                'content' => $request->content
            ] 
        );

        return $this->response(true, 'document updated successfully!', $document);
    }


    public function delete($request)
    {
        $document = Document::encontrar($request->id);
        $document->eliminar();

        return $this->response(true, 'document deleted successfully!', $document);
    }
}
