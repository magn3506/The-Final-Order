<?php
require_once('../db-connection/root-connection.php');

try{
    $id = $_POST['id'];
    $user_name = $_POST['user_name'];

    //Prepare SQL query
    $q = $db->prepare('UPDATE users SET userName = :user_name WHERE id = :id');

    //BIND VALUES
    $q->bindValue(':id', $id);
    $q->bindValue(':user_name', $user_name);

    //Execute the query
    $q->execute();

    http_response_code(200);
    echo 'Updated rows: '. $q->rowCount();
}catch(PDOException $ex){
    echo $ex;
}