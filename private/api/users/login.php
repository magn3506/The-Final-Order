<?php

if(isset($_POST['email']) && isset($_POST['password'])){
    $sData = file_get_contents('http://127.0.0.1/The-Final-Order/private/api/users/get-users.php');
    $jData = json_decode($sData);
    $sUserEmail = $_POST['email'];
    $sUserPassword = $_POST['password'];
    foreach($jData as $jUser){ 
        if($jUser->email == $sUserEmail && $jUser->password == $sUserPassword){
             //Create cookie - currently does not work - fix needed
             $cookie_name = "email";
             $cookie_value = $sUserEmail;
             setcookie($cookie_name, $cookie_value, "/");
             
             echo json_encode($jUser);
        }
    }
}