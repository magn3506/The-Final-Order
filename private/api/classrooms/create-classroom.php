<?php
require_once('../db-connection/root-connection.php');
try{
    $title = $_POST['title'];
    $description = $_POST['description'];
    $image = $_POST['image'];
    $isPrivate = $_POST['isPrivate'];

    //Prepare SQL Query
    $q = $db->prepare('INSERT INTO classrooms VALUES(null, :title, :description, :image, :isPrivate)');

    //BIND VALUES
    $q->bindValue(':title', $title);
    $q->bindValue(':description', $description);
    $q->bindValue(':image', $image);
    $q->bindValue(':isPrivate', $isPrivate);

    //Execute SQL query
    $q->execute();

    http_response_code(200);
    echo 'Classroom ID: '.$db->lastInsertId();
}catch(PDOException $ex){
    echo $ex;
}