<?php
// acces local_server variables
include('../../local_server_path.php'); 

// TJEK IF id IS PROVIDED
if(isset($_GET['classroom_id'])
){
    // GET GLOBAL VIRABLE classroom_id
    $classroom_id = $_GET['classroom_id'];
    
    // GET CLASSROOM DATA
    $get_classroom_api = $local_server_path . '/private/api/classrooms/get-classroom.php?classroom_id='.$classroom_id;
  
    $s_classroom_data = file_get_contents($get_classroom_api);
    
    // IF CLASSROOM EXISTS IT MUST BE AN OBJECT, IF NOT RETURN EROOR
    if(!is_object(json_decode($s_classroom_data))){
        
        // IF EROOR RESPONSE
        echo 'No classroom with id: ' . $classroom_id;

    }else{

        // GET ALL LECTURE OF CLASSROOM_ID
        $get_lectures_api = $local_server_path . '/private/api/lectures/get-lectures-from-classroom-id.php?classroom_id='.$classroom_id;

        $s_lectures_data = file_get_contents($get_lectures_api);

        // CONVERT STRING DATA TO JSON. SO WHE CAN MANIPULATE IT
        $j_classroom_data = json_decode($s_classroom_data);
        $j_lectures_data = json_decode($s_lectures_data);

        // ADD ARRAY OF LECTURES TO CLASSROOM OBJ
        $j_classroom_data->lectures = $j_lectures_data;

        // RESPONSE
        http_response_code(200);
        header('Content-Type: application/json');
        // RESPONSE IS CLASSROOM OBJECT WITH ALL ITS LECTURES
        echo json_encode($j_classroom_data);
    }

}else {
    echo 'EROOR: classroom_id must be provided';
}


