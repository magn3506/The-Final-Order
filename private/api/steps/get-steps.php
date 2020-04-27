<?php
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
