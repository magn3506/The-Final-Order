<?php
require_once('../db-connection/root-connection.php');

try{
    if(isset($_POST['email']) && isset($_POST['password']) && isset($_POST['user_name'])){
        $email = $_POST['email'];
        $password = $_POST['password'];
        $user_name = $_POST['user_name'];
    
        //Prepare SQL query
        $q = $db->prepare('INSERT INTO users VALUES(null, :email, :password, :user_name)');
    
        //BIND VALUES TO POST
        $q->bindValue(':email', $email);
        $q->bindValue(':password', $password);
        $q->bindValue(':user_name', $user_name);
    
        //Execute SQL query
        $q->execute();
    
        http_response_code(200);
        echo 'User ID: '.$db->lastInsertId();
    }else{
        echo "Missing fields";
    }

}catch(PDOException $ex){
    echo $ex;
}