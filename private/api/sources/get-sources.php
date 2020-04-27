<?php
require_once('../db-connection/root-connection.php');
try{
    if(isset($_GET['step_id'])){
        //GET STEP ID
        $step_id = $_GET['step_id'];
        //PREPARE SELECT SQL QUERY
        $q = $db->prepare('SELECT * FROM sources WHERE stepID = :step_id');
        //BIND VALUES
        $q->bindValue(':step_id', $step_id);
        //EXECUTE QUERY
        $q->execute();
        //FETCH DATA
        $jData = $q->fetchAll();
        //CHECK IF THE EXISTED DATA IS AN OBJECT - [0] NEED TO GO INTO ARRAY TO CHECK
        if(!is_object($jData[0])){
            echo 'The data is not an object';
        }else{
            http_response_code(200);
            header('Content-Type: application/json');
            echo json_encode($jData);
        }

    }else{
        echo 'No sources with step id ' . $step_id;
    }

}catch(PDOException $ex){
    echo $ex;
}