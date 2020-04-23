<?php
require_once('../db-connection/root-connection.php');

try{
    if(isset($_GET['lecture_id'])){
        // GET classroom_id
        $lecture_id = $_GET['lecture_id'];
        //Prepare SQL query
        $q = $db->prepare('DELETE FROM lectures WHERE id = :lecture_id');
    
        // BIND VALUES
        $q->bindValue(':lecture_id', $lecture_id);
    
        //Execute SQL query
         $q->execute();

        // Returns how many rows where deleted in DB. if 0 Handle Error.
        $deletedRows = $q->rowCount();
        if($deletedRows === 0){
            echo "$deletedRows where deleted. Something went wrong. Maybe the lecture 'id' provided does not exist";
        }else{
            echo "$deletedRows where deleted.";
        }

    } else {
        http_response_code(404);
        echo 'lecture_id has to be provided';
    };
}catch(PDOException $ex){
    echo $ex;
}