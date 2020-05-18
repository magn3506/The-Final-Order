<?php

if(isset($_POST['email']) && isset($_POST['password'])){
    require './get-users.php';
    $sUserEmail = $_POST['email'];
    $sUserPassword = $_POST['password'];
    foreach($jData as $jUser){ 
        if($jUser->email == $sUserEmail && $jUser->password == $sUserPassword){
             session_start();
             $_SESSION['sEmail'] = $sUserEmail;
             header('Location: http://localhost:8000/');
             exit();
        }
    }
    //not found a match
    header('Location: http://localhost:8000/');
}