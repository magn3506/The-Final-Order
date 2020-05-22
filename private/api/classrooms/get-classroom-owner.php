<?php
// acces local_server variables
include('../../local_server_path.php'); 

// TJEK IF id IS PROVIDED
if(isset($_GET['classroom_id'])
){

    $classroom_id = $_GET['classroom_id'];

    require_once('../db-connection/root-connection.php');
    try{
        //PREPARE SQL QUERY
        $q = $db->prepare("SELECT userID FROM classroomownedandowners where classroomID = $classroom_id");
    
        //Execute SQL query
        $q->execute();
    
        //Fetch data
        $jOwner = $q->fetch();
    
        if(!$jOwner == null){
            http_response_code(200);
            header('Content-Type: application/json');
            echo json_encode($jOwner);
        }else{
            http_response_code(404);
            echo 'Owner not found.';
        }
    
    }catch(PDOException $ex){
        echo $ex;
    }

}else {
    echo 'EROOR: classroom_id must be provided';
}


