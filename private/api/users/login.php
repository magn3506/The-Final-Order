<?php
include('../../local_server_path.php'); 


if(isset($_POST['email']) && isset($_POST['password'])){
    $sData = file_get_contents($local_server_path . '/private/api/users/get-users.php');
    $jData = json_decode($sData);
    $sUserEmail = $_POST['email'];
    $sUserPassword = $_POST['password'];
    foreach($jData as $jUser){ 
        if($jUser->email == $sUserEmail && $jUser->password == $sUserPassword){
             //Create cookie - currently does not work - fix needed
             $cookie_name = "email";
             $cookie_value = $sUserEmail;
             setcookie($cookie_name, $cookie_value, "/");

             $jCookieInfo = new stdClass();
             $jCookieInfo->email = $jUser->email;
             $jCookieInfo->id = $jUser->id;
             
             echo json_encode($jCookieInfo);

        }
    }
}