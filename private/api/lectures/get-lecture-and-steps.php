<?php

// Check IF ID IS PROVIDED
if(isset($_GET['lecture_id'])){
    // GET GLOBAL VIRABLE lecture_id
    $lecture_id = $_GET['lecture_id'];

    // GET lecture DATA
    $get_lecture_api = 'http://127.0.0.1/the-Final-Order/private/api/lectures/get-lecture.php?lecture_id='.$lecture_id;
    $s_lecture_data = file_get_contents($get_lecture_api);

    // IF lecture EXISTS IT MUST BE AN OBJECT, IF NOT RETURN Error
    if(!is_object(json_decode($s_lecture_data))){

        // IF Error RESPONSE
        echo 'No lecture with id: ' . $lecture_id;

    }else{

        // GET ALL STEPS OF lecture_id
        $get_steps_api = 'http://127.0.0.1/the-Final-Order/private/api/steps/get-steps.php?lecture_id='.$lecture_id;
        $s_steps_data = file_get_contents($get_steps_api);

        // CONVERT STRING DATA TO JSON. SO WE CAN MANIPULATE IT
        $j_lecture_data = json_decode($s_lecture_data);
        $j_steps_data = json_decode($s_steps_data);
        
        
        //APPEND ANSWERS TO EACH STEP WITH MATCHING ID
        foreach($j_steps_data as $jStep){
            
            // GET ALL ANSWERS OF step_id
            $get_answers_api = 'http://127.0.0.1/the-Final-Order/private/api/answers/get-answers.php?step_id='.$jStep->id;
            $s_answers_data = file_get_contents($get_answers_api);

            // GET ALL SOURCES OF step_id
            $get_sources_api = 'http://127.0.0.1/the-Final-Order/private/api/sources/get-sources.php?step_id='.$jStep->id;
            $s_sources_data = file_get_contents($get_sources_api);
            
            // CONVERT STRING DATA TO JSON. SO WE CAN MANIPULATE IT
            $j_answers_data = json_decode($s_answers_data);
            $j_sources_data = json_decode($s_sources_data);
            
            //APPEND
            $jStep->answers = $j_answers_data;
            $jStep->sources = $j_sources_data;

        }

        // ADD ARRAY OF STEPS TO lecture OBJ
        $j_lecture_data->steps = $j_steps_data;
        

        // RESPONSE
        http_response_code(200);
        header('Content-Type: application/json');
        // RESPONSE IS lecture OBJECT WITH ALL ITS STEPS
        echo json_encode($j_lecture_data);
    }

}else {
    echo 'ERROR: lecture_id must be provided';
}