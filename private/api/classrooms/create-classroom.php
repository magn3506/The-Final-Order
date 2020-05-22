<?php
require_once('../db-connection/root-connection.php');
try{
    //https://www.youtube.com/watch?v=6jWzMnmGsvk - REFERENCE
    //BEGIN TRANSACTION
    $db->beginTransaction();
    //CREATE CLASSROOM QUERY
    $title = $_POST['title'];
    $description = $_POST['description'];
    $image = $_POST['image'];
    $is_private = $_POST['is_private'];

    $userID = $_GET['id'];

    //Prepare SQL Query
    $q1 = $db->prepare('INSERT INTO classrooms VALUES(null, :title, :description, :image, :is_private)');

    //BIND VALUES
    $q1->bindValue(':title', $title);
    $q1->bindValue(':description', $description);
    $q1->bindValue(':image', $image);
    $q1->bindValue(':is_private', $is_private);

    //Execute SQL query
    $q1->execute();

    //Get classroom id
    $classroomID = $db->lastInsertId();

    //CONNECT CLASSROOM TO USER QUERY
    $q2 = $db->prepare('INSERT INTO `classroomownedandowners` (`userID`, `classroomID`) VALUES (:userID, :classroomID)');

    //BIND VALUES
    $q2->bindValue(':userID', $userID);
    $q2->bindValue(':classroomID', $classroomID);

    //Execute SQL query
    $q2->execute();

    //COMMIT TRANSACTION
    $db->commit();

    http_response_code(200);
    echo $classroomID;
    
}catch(PDOException $ex){
    //ROLL BACK TRANSACTION
    $db->rollBack();
    echo $ex;
}