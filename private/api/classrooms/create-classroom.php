<?php
require_once('../db-connection/root-connection.php');
try{
    //VARIABLES OF POST AND GET
    $title = $_POST['title'];
    $description = $_POST['description'];
    $image = $_POST['image'];
    $is_private = $_POST['is_private'];

    $userID = $_GET['id'];
    //SET @p0=':title'; SET @p1=':description'; SET @p2=':image'; SET @p3=':is_private'; SET @p4=':userID'; 

    //Prepare SQL Query - STORED PROCEDURE TRANSACTION
    $q = $db->prepare('CALL `createClassrooms`(:title, :description, :image, :is_private, :userID);');

    //BIND VALUES
    $q->bindParam(':title', $title);
    $q->bindParam(':description', $description);
    $q->bindParam(':image', $image);
    $q->bindParam(':is_private', $is_private);
    $q->bindParam(':userID', $userID);

    //Execute SQL query
    $q->execute();

    http_response_code(200);
    echo 2;
    
}catch(PDOException $ex){
    //ROLL BACK TRANSACTION
    $db->rollBack();
    echo $ex;
}