<?php
require_once('../db-connection/root-connection.php');
try{
    //VARIABLES OF POST AND GET
    $title = $_POST['title'];
    $description = $_POST['description'];
    $image = $_POST['image'];
    $is_private = $_POST['is_private'];

    $userID = $_GET['id'];

    //Prepare SQL Query - STORED PROCEDURE TRANSACTION - https://www.youtube.com/watch?v=dwVj_g3TpZ4 - REFERENCE
    $q = $db->prepare('CALL `createClassrooms`(:title, :description, :image, :is_private, :userID, @p5);');

    //BIND VALUES
    $q->bindParam(':title', $title);
    $q->bindParam(':description', $description);
    $q->bindParam(':image', $image);
    $q->bindParam(':is_private', $is_private);
    $q->bindParam(':userID', $userID);

    //Execute SQL query
    $q->execute();

    //SELECT CLASSROOM FROM STORED PROCEDURE
    $q2 = $db->prepare('SELECT @p5 AS `classroomID`;');
    $q2->execute();

    http_response_code(200);
    $classroomID = $q2->fetchAll();
    echo $classroomID[0]->classroomID;
    
}catch(PDOException $ex){
    //ROLL BACK TRANSACTION
    $db->rollBack();
    echo $ex;
}