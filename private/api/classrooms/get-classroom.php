<?php
// acces local_server variables
include('../../local_server_path.php'); 

require_once('../db-connection/root-connection.php');
try{

    if(isset($_GET['classroom_id'])){
        //GET ID
        $classroom_id = $_GET['classroom_id'];
        //Prepare SQL query
        $q = $db->prepare('SELECT * FROM `get_classrooms` WHERE id = :classroom_id');

        //Bind values
        $q->bindValue(':classroom_id', $classroom_id);

        //Execute SQL query
        $q->execute();

        //Fetch data
        $jData = $q->fetch();

        // !! Check if data is not empty
        if(!$jData == null){
         
            // PULLS OUT SINGLE OBJECT FROM ARRAY
            // $j_classroom_obj = new stdClass;
            // $j_classroom_obj->id = $jData[0]->id;
            // $j_classroom_obj->title = $jData[0]->title;
            // $j_classroom_obj->description = $jData[0]->description;
            // $j_classroom_obj->image = $jData[0]->image;
            // $j_classroom_obj->isPrivate = $jData[0]->isPrivate;
            //  // FIND CLASSROOM OWNER
            // $get_owner_id_api = $local_server_path . '/private/api/classrooms/get-classroom-owner.php?classroom_id='.$classroom_id;
            // $s_owner_id = file_get_contents($get_owner_id_api);
            // $j_owner_id = json_decode($s_owner_id);
            // // FIND USER NAME 
            // $get_user_api = $local_server_path . '/private/api/users/get-user.php?user_id='.$j_owner_id->userID;
            // $s_user = file_get_contents($get_user_api);
            // $j_user = json_decode($s_user);
            // // ADD USER DETAILTS TO CLASROOM OBJ
            // $j_classroom_obj->owner = $j_user->userName;

            // TODO: ADD FOLOWERS, LECTURES, AND RATING

            // RESPONSE CODE & HEADER
            http_response_code(200);
            header('Content-Type: application/json');
            // RESPONSE WITH SINGLE OBJECT
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