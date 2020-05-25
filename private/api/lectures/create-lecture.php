<?php
require_once('../db-connection/root-connection.php');

try{
    // TODO: ADD all data fields, when created in DB fx, description etc.
    // CHECK IF DATA IS PROVIDED VIA POST 
    if(isset($_POST['title']) && isset($_POST['description']) && isset($_POST['classroom_id'])){

    // ! #########################################
    // TODO: CREATE VALIDATION -------------------
    // ! #########################################

    $title = $_POST['title'];
    $classroom_id = $_POST['classroom_id'];
    $description = $_POST['description'];
    $stepsArray = json_decode($_POST['steps']);

    // TODO: WHITE description, etc. when created in DB

    //BEGIN TRANSACTION
    $db->beginTransaction();

    //Prepare SQL query
    $q = $db->prepare('INSERT INTO lectures VALUES(null, :title, :_description, :classroom_id)');
   
    //BIND VALUES TO POST
    $q->bindValue(':title', $title);
    $q->bindValue(':classroom_id', $classroom_id);
    $q->bindValue(':_description', $description);
    // TODO: WHITE description, etc. when created in DB

    //Execute SQL query
    $q->execute();

    //GET Lecture id
    $lectureID = $db->lastInsertId();

    //LOOP THROUGH STEPS ARRAY AND INSERT INTO STEPS TABLE WITH SQL QUERY
    foreach($stepsArray as $i => $step) {
        
        $i = $db->prepare('INSERT INTO `steps` (`id`, `title`, `theoryText`, `question`, `lectureID`, `stepOrder`) VALUES (NULL, :title, :theoryText, :question, :lectureID, :stepOrder);');
        $i->bindValue(':title', $step->title);
        $i->bindValue(':theoryText', $step->theoryText);
        $i->bindValue(':question', $step->question);
        $i->bindValue(':lectureID', $lectureID);
        $i->bindValue(':stepOrder', $step->stepOrder);
        $i->execute();

        //GET STEP ID
        $stepID = $db->lastInsertId();

        //LOOP THROUGH ANSWERS ARRAY AND INSERT INTO ANSWERS TABLE WITH SQL QUERY
        foreach($step->answers as $j => $answer){
            $j = $db->prepare('INSERT INTO `answers` (`id`, `isCorrect`, `answerValue`, `stepID`) VALUES (NULL, :isCorrect, :answerValue, :stepID);');
            $j->bindValue(':isCorrect', $answer->isCorrect);
            $j->bindValue(':answerValue', $answer->answerValue);
            $j->bindValue(':stepID', $stepID);
            $j->execute();
        }
    }

    //COMMIT TRANSACTION
    $db->commit();

    // RESPONSE SUCCES
    http_response_code(200);

    } else {
        echo 'error: correct payload must be provided';
    };

}catch(PDOException $ex){
    $db->rollback();
    echo 'Connection failed: ' . $ex->getMessage();
}