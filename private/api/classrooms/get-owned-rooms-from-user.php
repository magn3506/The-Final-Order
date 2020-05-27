<?php
// acces local_server variables
include('../../local_server_path.php'); 

// TJEK IF id IS PROVIDED
if(isset($_GET['user_id'])
){

    $user_id = $_GET['user_id'];

    require_once('../db-connection/root-connection.php');
    try{
        //PREPARE SQL QUERY
        $q = $db->prepare("SELECT * FROM classroomownedandowners where userID = $user_id");
    
        //Execute SQL query
        $q->execute();
    
        //Fetch data
        $jOwnedRooms = $q->fetchAll();
    
        //!! Check if classrooms table is not empty
        if(!$jOwnedRooms == null){

            foreach($jOwnedRooms as $jOwnedRoom){
                // GET ALL LECTURE OF CLASSROOM_ID
                $get_classroom_api = $local_server_path . '/private/api/classrooms/get-classroom.php?classroom_id='.$jOwnedRoom->classroomID;
                $s_classroom_data = file_get_contents($get_classroom_api);

                // CONVERT STRING DATA TO JSON
                $j_classroom_data = json_decode($s_classroom_data);
                // ADD CLASSROOM DETAILS TO OWNED ROOMS OBJECT
                $jOwnedRoom->classroom = $j_classroom_data;
                $jOwnedRoom->classroom->userID = $user_id;
            }

            // RESPONSE CODE & HEADER
            http_response_code(200);
            header('Content-Type: application/json');
            echo json_encode($jOwnedRooms);
        }else{
            http_response_code(404);
            echo 'users followed rooms could not be found.';
        }
    
    }catch(PDOException $ex){
        echo $ex;
    }

}else {
    echo 'EROOR: user_id must be provided';
}


