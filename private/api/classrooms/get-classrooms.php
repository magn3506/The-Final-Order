<?php
// acces local_server variables
include('../../local_server_path.php'); 

require_once('../db-connection/root-connection.php');
try{
    //PREPARE SQL QUERY
    $q = $db->prepare('SELECT * FROM classrooms');

    //Execute SQL query
    $q->execute();

    //Fetch data
    $jClassrooms = $q->fetchAll();

    //!! Check if classrooms table is not empty
    if(!$jClassrooms == null){

        foreach ($jClassrooms as $jRooom) {
               // FIND CLASSROOM OWNER
               $get_owner_id_api = $local_server_path . '/private/api/classrooms/get-classroom-owner.php?classroom_id='.$jRooom->id;
               $s_owner_id = file_get_contents($get_owner_id_api);
               $j_owner_id = json_decode($s_owner_id);
               // FIND USER NAME 
               $get_user_api = $local_server_path . '/private/api/users/get-user.php?user_id='.$j_owner_id->userID;
               $s_user = file_get_contents($get_user_api);
               $j_user = json_decode($s_user);
               // ADD USER DETAILTS TO CLASROOM OBJ
               $jRooom->owner = $j_user->userName;
        }

        // RESPONSE CODE & HEADER
        http_response_code(200);
        header('Content-Type: application/json');
            
        echo json_encode($jClassrooms);
    }else{
        echo 'Classrooms could not be found.';
    }

}catch(PDOException $ex){
    echo $ex;
}