<?php
	require "init.php";
	header("Content-Type: application/json; charset=UTF-8");
	
	$dataJSON = $_POST["jsonObj"];
    $data = json_decode($dataJSON);
    $result_1 = false;
    $result_2 = false;
    
    $specialChar = array();
    $replaceChar = array();
    $specialChar[0] = "/'/";
    $replaceChar[0] = "\'";
    $specialChar[1] = '/"/';
    $replaceChar[1] = '\"';
    
    if($data->title !== "" || $data->homeLoc){
        $data->title = preg_replace($specialChar,$replaceChar,$data->title);
        
        $sql = "update properties set value='$data->title' where name='home_title'";
        $result_1 = mysqli_query($con,$sql);
        $sql = "update properties set value='$data->homeLoc' where name='home_location'";
        $result_2 = mysqli_query($con,$sql);
    }

    if($result_1 && $result_2){
        echo '1';
    }
?>