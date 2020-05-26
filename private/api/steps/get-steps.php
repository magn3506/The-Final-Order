<?php
// acces local_server variables
include('../../local_server_path.php'); 

require_once('../db-connection/root-connection.php');
try{
    if(isset($_GET['lecture_id'])){
        //GET LECTURE ID
        $lecture_id = $_GET['lecture_id'];
        //Prepare SQL SELECT QUERY
        $q = $db->prepare('SELECT * FROM steps WHERE lectureID = :lecture_id');
        //Bind values
        $q->bindValue(':lecture_id', $lecture_id);

        //EXECUTE QUERY
        $q->execute();

        //Fetch data
        $jData = $q->fetchAll();

        //CHECK IF THE EXISTED DATA IS AN OBJECT - [0] NEED TO GO INTO ARRAY TO CHECK
        if(!is_object($jData[0])){
            echo 'No steps in lecture with id ' . $lecture_id;
        }else{

            foreach ($jData as $jStep) {

                 // GET ALL LECTURE OF CLASSROOM_ID
                $get_answers_api = $local_server_path . '/private/api/answers/get-answers.php?step_id='.$jStep->id;
                $s_answers_data = file_get_contents($get_answers_api);
                // ADD NEW KEY ANSWERS TO STEP OBJ
                $jStep->answers = json_decode($s_answers_data);

                // GET ALL SOURCES IF TRUE
                $get_sources_api = $local_server_path . '/private/api/sources/get-sources.php?step_id='.$jStep->id;
                $s_sources_data = file_get_contents($get_sources_api);
                // CONVERT TO JSON
                $j_sources_data = json_decode($s_sources_data);

                // TJEK IK SOURCES EXISTS IF ARRAY TRUE
                if(is_array($j_sources_data)){
                    $jStep->sources = $j_sources_data;
                }else{
                    $jStep->sources = [];
                }
                
            }

            // RESPONSE CODE & HEADER
            http_response_code(200);
            header('Content-Type: application/json');
            
            echo json_encode($jData);
        }
    }else{
        http_response_code(404);
        echo 'steps could not be found.';
    }

}catch(PDOException $ex){
    echo $ex;
}
