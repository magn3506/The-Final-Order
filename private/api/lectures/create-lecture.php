<?php
require_once('../db-connection/root-connection.php');

try{
    // TODO: ADD all data fields, when created in DB fx, description etc.
    // CHECK IF DATA IS PROVIDED VIA POST 
    if(isset($_POST['title']) && isset($_POST['description']) && isset($_POST['classroom_id'])){

    // ! #########################################
    // TODO: CREATE VALIDATION -------------------
    // ! #########################################

    $title = $_POST['title'];
    $classroom_id = $_POST['classroom_id'];
    $description = $_POST['description'];

    // TODO: WHITE description, etc. when created in DB

    //Prepare SQL query
    $q = $db->prepare('INSERT INTO lectures VALUES(null, :title, :_description, :classroom_id)');
   
    //BIND VALUES TO POST
    $q->bindValue(':title', $title);
    $q->bindValue(':classroom_id', $classroom_id);
    $q->bindValue(':_description', $description);
    // TODO: WHITE description, etc. when created in DB

    //Execute SQL query
    $q->execute();

    // RESPONSE SUCCES
    http_response_code(200);
    echo 'Created lecture with id '.$db->lastInsertId()." in classroom with id $classroom_id";

    } else {
        echo 'error: correct payload must be provided';
    };

}catch(PDOException $ex){
    echo 'Connection failed: ' . $ex->getMessage();
}