<?php
//Check string is too short or too long
function isStringValid($sText, $iMin, $iMax){
    if(strlen($sText) < $iMin || strlen($sText) > $iMax){
        return false;
    }
    return true;
}

//Check if integer is too short or too long or is it an integer
function isIntegerValid($iInteger, $iMin, $iMax){
    if(!ctype_digit($iInteger)){
        return false;
    }
    if(strlen($iInteger) < $iMin || strlen($sText) > $iMax){
        return false;
    }
    return true;
}