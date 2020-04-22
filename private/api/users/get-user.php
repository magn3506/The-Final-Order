<?php
require_once('../db-connection/root-connection.php');

try{

    $email = $_POST['email'];

    //Prepare SQL query
    $q = $db->prepare('SELECT * FROM users WHERE email = :email');

    //Bind Values
    $q->bindValue(':email', $email);

    //Execute SQL query
    $q->execute();

    //FETCH DATA
    $jData = $q->fetchAll();
    
    http_response_code(200);
    header('Content-Type: application/json');
    
    echo json_encode($jData);

}catch(PDOException $ex){
    echo $ex;
}