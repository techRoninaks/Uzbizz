<?php
    require 'init.php';
    header("Content-Type: application/json; charset=UTF-8");
	
	$dataJSON = $_POST["jsonObj"];
    $data = json_decode($dataJSON);
    $sql = "SELECT * from users WHERE user_email = '$data->userEmail' AND user_password = '$data->userPassword' AND user_role LIKE '%admin%'";
    $result = mysqli_query($con,$sql);
    $row = mysqli_fetch_assoc($result);
	if($row !== NULL){
        $userData = array("userName"=>$row["user_name"],"userId"=>$row["id"],"role"=>$row["user_role"]);
        $jsonData = json_encode($userData);
        echo $jsonData;
	} else {
	    echo "0";
	}
?>