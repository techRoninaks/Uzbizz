<?php
	require "init.php";
	header("Content-Type: application/json; charset=UTF-8");
	
	$dataJSON = $_POST["jsonObj"];
    $data = json_decode($dataJSON);
    $result_1 = false;
    $result_2 = false;
    $result_3 = false;
     
    $specialChar = array();
    $replaceChar = array();
    $specialChar[0] = "/'/";
    $replaceChar[0] = "\'";
    $specialChar[1] = '/"/';
    $replaceChar[1] = '\"';
    
    if($data->about !== "" || $data->mission !== "" || $data->vision !== ""){
        $data->about = preg_replace($specialChar,$replaceChar,$data->about);
        $data->mission = preg_replace($specialChar,$replaceChar,$data->mission);
        $data->vision = preg_replace($specialChar,$replaceChar,$data->vision);
        
        $sql = "update properties set value='$data->about' where name='about_desc'";
        $result_1 = mysqli_query($con,$sql);
        $sql = "update properties set value='$data->mission' where name='mission_desc'";
        $result_2 = mysqli_query($con,$sql);
        $sql = "update properties set value='$data->vision' where name='vision_desc'";
        $result_3 = mysqli_query($con,$sql);
    }

    if($result_1 && $result_2 && $result_3){
        echo '1';
    }
?>