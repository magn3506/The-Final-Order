<?php
// acces local_server variables
include('../../local_server_path.php'); 

require_once('../db-connection/root-connection.php');
try{
    if(isset($_GET['lecture_id'])){
        //GET ID
        $lecture_id = $_GET['lecture_id'];
        //Prepare SQL query
        $q = $db->prepare('SELECT * FROM lectures WHERE id = :lecture_id');
        //Bind values
        $q->bindValue(':lecture_id', $lecture_id);
        //Execute SQL query
        $q->execute();
        //Fetch data
        $jData = $q->fetchAll();

        //CHECK IF THE EXISTED DATA IS AN OBJECT
        if(!is_object($jData)){

            // PULLS OUT SINGLE OBJECT FROM ARRAY
            $j_lecture_obj = new stdClass;
            $j_lecture_obj->id = $jData[0]->id;
            $j_lecture_obj->title = $jData[0]->title;
            $j_lecture_obj->description = $jData[0]->description;
            $j_lecture_obj->classroomID = $jData[0]->classroomID;
            // GET ALL STEPS
            $get_steps_api = $local_server_path . '/private/api/steps/get-steps.php?lecture_id='.$lecture_id;
            $s_steps_data = file_get_contents($get_steps_api);
            $j_lecture_obj->steps = json_decode($s_steps_data);
            
            // RESPONSE CODE & HEADER
            http_response_code(200);
            header('Content-Type: application/json');

            // RESPONSE WITH SINGLE OBJECT
            echo json_encode($j_lecture_obj);
        }else{
            echo 'No lecture with id: ' . $lecture_id;
        }
        
    }else{
        echo 'lecture id must be provided';
    }
}catch(PDOException $ex){
    echo $ex;
}