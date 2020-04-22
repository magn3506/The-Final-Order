<?php
require_once('../db-connection/root-connection.php');
try{

    if(isset($_GET['classroom_id'])){
        //GET ID
        $classroom_id = $_GET['classroom_id'];
        //Prepare SQL query
        $q = $db->prepare('SELECT * FROM classrooms WHERE id = :classroom_id');

        //Bind values
        $q->bindValue(':classroom_id', $classroom_id);

        //Execute SQL query
        $q->execute();

        //Fetch data
        $jData = $q->fetchAll();

        // !! Check if data is not empty
        if(!$jData == null){
            // RESPONSE CODE & HEADER
            http_response_code(200);
            header('Content-Type: application/json');
            
            echo json_encode($jData);
        }else{
            echo 'No classroom with id: ' . $classroom_id;
        }
        

    }else {
        http_response_code(404);
        echo 'classroom_id has to be provided';
    }

}catch(PDOException $ex){
    echo $ex;
}