<?php
require_once('../db-connection/root-connection.php');

try{

    $user_id = $_GET['user_id'];
    //Prepare SQL query
    $q = $db->prepare("SELECT * FROM users WHERE id = $user_id");

    //Execute SQL query
    $q->execute();

    //FETCH DATA
    $jData = $q->fetch();
    
    http_response_code(200);
    header('Content-Type: application/json');
    echo json_encode($jData);

}catch(PDOException $ex){
    echo $ex;
}