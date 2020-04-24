<?php
require_once('../db-connection/root-connection.php');
try{
    if(isset($_POST['lecture_id']) && isset($_POST['title']) && isset($_POST['description'])){
        // ! #########################################
        // TODO: CREATE VALIDATION -------------------
        // ! #########################################

        //GET POST values & id
        $lecture_id = $_POST['lecture_id'];
        $title = $_POST['title'];
        $description = $_POST['description'];

        //prepare SQL query
        $q = $db->prepare('UPDATE lectures SET title = :title, description = :description WHERE id = :lecture_id');

        //bind values
        $q->bindValue(':title', $title);
        $q->bindValue(':description', $description);
        $q->bindValue(':lecture_id', $lecture_id);

        //Execute the query
        $q->execute();

        //HTTP RESPONSE AND ROWS UPDATED
        http_response_code(200);
        //!! 0 rows affected if ID does not match any classrooms or no rows where changed by input
        echo $q->rowCount();
    }else {
        echo 'Correct payload must be provided';
        http_response_code(404);
    }

}catch(PDOException $ex){
    echo $ex;
}