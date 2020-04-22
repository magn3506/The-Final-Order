<?php
require_once('../db-connection/root-connection.php');
try{
    if(isset($_POST['classroom_id'])){
        //GET POST values & id
        $classroom_id = $_POST['classroom_id'];
        $title = $_POST['title'];
        $description = $_POST['description'];
        $image = $_POST['image'];
        $is_private = $_POST['is_private'];

        //prepare SQL query
        $q = $db->prepare('UPDATE classrooms SET title = :title, description = :description, image = :image, isPrivate = :is_private WHERE id = :classroom_id');

        //bind values
        $q->bindValue(':title', $title);
        $q->bindValue(':description', $description);
        $q->bindValue(':image', $image);
        $q->bindValue(':is_private', $is_private);
        $q->bindValue(':classroom_id', $classroom_id);

        //Execute the query
        $q->execute();

        //HTTP RESPONSE AND ROWS UPDATED
        http_response_code(200);
        //!! 0 rows affected if ID does not match any classrooms or no rows where changed by input
        echo $q->rowCount();
    }else {
        http_response_code(404);
    }

}catch(PDOException $ex){
    echo $ex;
}