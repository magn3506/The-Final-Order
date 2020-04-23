<?php
require_once('../db-connection/root-connection.php');

try{
    if(isset($_GET['classroom_id'])){
        //GET classroom_id
        $classroom_id = $_GET['classroom_id'];
        //Prepare SQL query
        $q = $db->prepare('DELETE FROM classrooms WHERE id = :classroom_id');

        //Bind values
        $q->bindValue(':classroom_id', $classroom_id);

        //Execute SQL query
        $q->execute();

        // Returns how many rows where deleted in db. If 0 handle error
        $deletedRows = $q->rowCount();
        if($deletedRows === 0){
            echo "$deletedRows rows where deleted. Something went wrong. Maybe the lecture 'id' provided does not exist";
        }else{
            echo "$deletedRows rows where deleted.";
        }
    }else {
        http_response_code(404);
        echo 'classroom_id has to be provided';
    };

}catch(PDOException $ex){
    echo $ex;
}