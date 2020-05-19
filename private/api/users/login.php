<?php

if(isset($_POST['email']) && isset($_POST['password'])){
    $sData = file_get_contents('http://127.0.0.1/The-Final-Order/private/api/users/get-users.php');
    $jData = json_decode($sData);
    $sUserEmail = $_POST['email'];
    $sUserPassword = $_POST['password'];
    foreach($jData as $jUser){ 
        if($jUser->email == $sUserEmail && $jUser->password == $sUserPassword){
             session_start();
             $_SESSION['sEmail'] = $sUserEmail;
             echo json_encode($jUser);
             
        }
    }
    // //not found a match
    // header('Location: http://localhost:8000');
}