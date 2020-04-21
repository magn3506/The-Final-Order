<?php
try{

    $db_user_name = 'root';
    $db_password = '';
    //
    $db_host = '127.0.0.1';
    $db_name = 'classrooms';
    $db_connection = "mysql:host=$db_host; dbname=$db_name; charset=utf8mb4";
    //
    $db_options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, 
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ
    ];
    $db = new PDO($db_connection, $db_user_name, $db_password, $db_options);

}catch(PDOException $ex){
    echo $ex;
}