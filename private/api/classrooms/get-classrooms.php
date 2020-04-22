<?php
require_once('../db-connection/root-connection.php');
try{
    //PREPARE SQL QUERY
    $q = $db->prepare('SELECT * FROM classrooms');

    //Execute SQL query
    $q->execute();

    //Fetch data
    $jData = $q->fetchAll();

    //!! Check if classrooms table is not empty
    if(!$jData == null){
        // RESPONSE CODE & HEADER
        http_response_code(200);
        header('Content-Type: application/json');
            
        echo json_encode($jData);
    }else{
        echo 'Classrooms could not be found.';
    }

}catch(PDOException $ex){
    echo $ex;
}