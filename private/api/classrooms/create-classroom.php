<?php
require_once('../db-connection/root-connection.php');
try{
    //VARIABLES OF POST AND GET
    $title = $_POST['title'];
    $description = $_POST['description'];
    $image = $_POST['image'];
    $is_private = $_POST['is_private'];

    $userID = $_GET['id'];

    //BEGIN TRANSACTION
    $db->beginTransaction();

    //Prepare SQL Query - INSERT INTO CLASSROOMS
    $q = $db->prepare('INSERT INTO classrooms VALUES(null, :title, :description, :image, :is_private);');

    //BIND VALUES
    $q->bindValue(':title', $title);
    $q->bindValue(':description', $description);
    $q->bindValue(':image', $image);
    $q->bindValue(':is_private', $is_private);

    //Execute SQL query
    $q->execute();

    //GET clasroom id
    $classroomID = $db->lastInsertId();

    //Prepare SQL Query - INSERT INTO BRIDGE TABLE classroomownedandowners
    $q2 = $db->prepare('INSERT INTO classroomownedandowners(userID, classroomID) VALUES (:userID, :classroomID);');

    //BIND VALUES
    $q2->bindValue(':userID', $userID);
    $q2->bindValue(':classroomID', $classroomID);

    //Execute SQL query
    $q2->execute();

    http_response_code(200);
    echo $classroomID;

    //COMMIT TRANSACTION
    $db->commit();
    
}catch(PDOException $ex){
    //ROLL BACK TRANSACTION
    $db->rollBack();
    echo $ex;
}