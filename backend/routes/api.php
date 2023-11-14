<?php

use App\Controllers\DocumentController;
use App\Controllers\DocumentTypeController;
use App\Controllers\ProcesseController;
use App\Controllers\UserController;

$documentController = new DocumentController();
$processeController = new ProcesseController();
$documentTypeController = new DocumentTypeController();
$userController = new UserController();


if (isset($_GET['api']) && $_GET['api'] == 'documents-get') {
    echo $documentController->getAll();
} elseif (isset($_POST['api']) && $_POST['api'] == 'documents-create') {
    echo $documentController->create((object) $_POST);
} elseif(isset($_POST['api']) && $_POST['api'] == 'documents-update'){
    echo $documentController->update((object) $_POST);
}elseif(isset($_POST['api']) && $_POST['api'] == 'documents-delete'){
    echo $documentController->delete((object) $_POST);

}elseif(isset($_GET['api']) && $_GET['api'] == 'processes-get'){
    echo $processeController->getAll((object) $_GET);
}elseif(isset($_POST['api']) && $_POST['api'] == 'documentTypes-get'){
    echo $documentTypeController->getAll((object) $_POST);

}elseif(isset($_POST['api']) && $_POST['api'] == 'users-get-by-name'){
    echo $userController->getUserByName((object) $_POST);
}elseif(isset($_POST['api']) && $_POST['api'] == 'users-create'){
    echo $userController->create((object) $_POST);

}else {
    echo $documentController->response(false, 'API does not found!');
}
