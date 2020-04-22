<?php
require_once('../db-connection/root-connection.php');

try{
    // TODO: ADD all data fields, when created in DB fx, description etc.
    // CHECK IF DATA IS PROVIDED VIA POST 
    if(isset($_POST['title']) && isset($_POST['classroom_id'])){

    // ! #########################################
    // TODO: CREATE VALIDATION -------------------
    // ! #########################################

    $title = $_POST['title'];
    $classroom_id = $_POST['classroom_id'];
    // TODO: WHITE description, etc. when created in DB

    //Prepare SQL query
    $q = $db->prepare('INSERT INTO lectures VALUES(null, :title, :classroom_id)');
   
    //BIND VALUES TO POST
    $q->bindValue(':title', $title);
    $q->bindValue(':classroom_id', $classroom_id);
    // TODO: WHITE description, etc. when created in DB

    //Execute SQL query
    $q->execute();

    // RESPONSE SUCCES
    http_response_code(200);
    echo 'Created lecture with id'.$db->lastInsertId()." in classroom with id $classroom_id";

    } else {
        echo 'error: correct payload must be provided';
    };

}catch(PDOException $ex){
    echo 'Connection failed: ' . $ex->getMessage();
}