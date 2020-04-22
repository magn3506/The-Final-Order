<?php
require_once('../db-connection/root-connection.php');

try{

    if(isset($_GET['classroom_id'])){
        // GET classroom_id
        $classroom_id = $_GET['classroom_id'];
        // !! GETS ALL LECTURES WHERE classroom_id is equal to $_GET['classroom_id'];
        //Prepare SQL query
        $q = $db->prepare('SELECT * FROM lectures WHERE classroomID = :classroom_id');
    
        // BIND VALUES
        $q->bindValue(':classroom_id', $classroom_id);
    
        //Execute SQL query
        $q->execute();
    
        //FETCH DATA
        $jData = $q->fetchAll();
        
        // RESPONSE CODE & HEADER
        http_response_code(200);
        header('Content-Type: application/json');
        
        echo json_encode($jData);
    } else {
        http_response_code(404);
        echo 'classroom_id has to be provided';
    };

}catch(PDOException $ex){
    echo $ex;
}