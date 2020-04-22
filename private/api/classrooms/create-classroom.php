<?php
require_once('../db-connection/root-connection.php');
try{
    $title = $_POST['title'];
    $description = $_POST['description'];
    $image = $_POST['image'];
    $is_private = $_POST['is_private'];

    //Prepare SQL Query
    $q = $db->prepare('INSERT INTO classrooms VALUES(null, :title, :description, :image, :is_private)');

    //BIND VALUES
    $q->bindValue(':title', $title);
    $q->bindValue(':description', $description);
    $q->bindValue(':image', $image);
    $q->bindValue(':is_private', $is_private);

    //Execute SQL query
    $q->execute();

    http_response_code(200);
    echo 'Classroom ID: '.$db->lastInsertId();
}catch(PDOException $ex){
    echo $ex;
}