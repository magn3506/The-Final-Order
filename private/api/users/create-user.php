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
        $q = $db->prepare('INSERT INTO users VALUES(null, :email, :password, :user_name)');
    
        //BIND VALUES TO POST
        $q->bindValue(':email', $email);
        $q->bindValue(':password', $password);
        $q->bindValue(':user_name', $user_name);
    
        //Execute SQL query
        $q->execute();
    
        http_response_code(200);

        //Create cookie - currently does not work - fix needed
        $cookie_name = "email";
        $cookie_value = $email;
        setcookie($cookie_name, $cookie_value, 'http://localhost:8000/404');

        $jUser = new stdClass();
        $jUser->email = $email;
        $jUser->userName = $user_name;
        $jUser->password = $password;
        echo json_encode($jUser);
    }else{
        echo "Missing fields";
    }

}catch(PDOException $ex){
    echo $ex;
}