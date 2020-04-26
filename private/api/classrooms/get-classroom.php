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
         
            // PULLS OUT SINGLE OBJECT FROM ARRAY
            $j_classroom_obj = new stdClass;
            $j_classroom_obj->id = $jData[0]->id;
            $j_classroom_obj->title = $jData[0]->title;
            $j_classroom_obj->description = $jData[0]->description;
            $j_classroom_obj->image = $jData[0]->image;
            $j_classroom_obj->isPrivate = $jData[0]->isPrivate;

            // RESPONSE CODE & HEADER
            http_response_code(200);
            header('Content-Type: application/json');
            // RESPONSE WITH SINGLE OBJECT
            echo json_encode($j_classroom_obj);
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