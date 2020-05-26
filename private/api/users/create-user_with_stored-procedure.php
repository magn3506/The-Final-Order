<?php
require_once('../db-connection/root-connection.php');

try{
    if(isset($_POST['email']) && isset($_POST['password']) && isset($_POST['user_name'])){
        $email = $_POST['email'];
        $password = $_POST['password'];
        $user_name = $_POST['user_name'];
    
    //Validation
    require_once('../validation/validation.php');  
    if(!isStringValid($user_name, 2, 25)){
        echo 'Validation Error';
        exit();
    }

    
        //Prepare SQL query
        $q = $db->prepare('CALL `createUser`(:email, :password, :user_name, @p3);');
    
        //BIND VALUES TO POST
        $q->bindParam(':email', $email);
        $q->bindParam(':password', $password);
        $q->bindParam(':user_name', $user_name);
    
        //Execute SQL query
        $q->execute();

        //SELECT CLASSROOM FROM STORED PROCEDURE
        $q2 = $db->prepare('SELECT @p3 AS `userID`;');
        $q2->execute();

        $UserID = $q2->fetchAll();
    
        http_response_code(200);

        //Create cookie - currently does not work - fix needed
        $cookie_name = "email";
        $cookie_value = $email;
        setcookie($cookie_name, $cookie_value, 'http://localhost:8000/404');

        $jUser = new stdClass();
        $jUser->email = $email;
        $jUser->id = $UserID[0]->userID;
        echo json_encode($jUser);
    }else{
        echo "Missing fields";
    }

}catch(PDOException $ex){
    echo $ex;
}