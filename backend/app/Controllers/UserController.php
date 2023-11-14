<?php

namespace App\Controllers;

use App\Traits\Util;
use App\Models\User;
use PIPE\Clases\PIPE;

class UserController
{
    use Util;

    /**
     * Gets all the data.
     *
     * @return string
     */
    public function getAll()
    {
        $users = User::todo();

        return $this->response(true, 'OK.', $users);
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
        // // validations
        if (empty($request->user_name) || empty($request->password)) {
            return $this->response(false, 'Username and password are required.');
        }

        $hashedPassword = password_hash($request->password, PASSWORD_DEFAULT);

        $users = User::crear(
            [
                'user_name' => $request->user_name,
                'password' => $hashedPassword,
            ]
        );

        return $this->response(true, 'document created successfully!', $users);
    }

    /**
     * Get data by username
     *
     * @return string
     */
    public function getUserByName($request)
    {
        // validations

        if (empty($request->user_name) || empty($request->password)) {
            return $this->response(false, 'Username and password are required.', null);
        }

         $nameUser = $request->user_name;

            $user = User::donde('user_name = ?', [$nameUser])->primero(PIPE::OBJETO);

        if ($user) {
            $decryptedPassword  = $request->password;
            $encryptedPassword = $user->password;
            
          if (password_verify($decryptedPassword, $encryptedPassword)) {

                return $this->response(true, 'OK.', $user);
            } else {
                return $this->response(false, 'Incorrect password.', null);
            }
        } else {
            return $this->response(false, 'User not found.', null);
        }
    }
}
