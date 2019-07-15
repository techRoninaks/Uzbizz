<?php
    require "init.php";
    header("Content-Type: application/json; charset=UTF-8");
	
    $id = $_POST["id"];
    //fetch image path from db
    $sql_image_path = "select img_path from gallery where id = '$id'";
    $result_image_path = mysqli_query($con,$sql_image_path);
    $image_path = mysqli_fetch_array($result_image_path);
    $fileName = "../../../".$image_path[0];
    
    //delete details from db
    $result = false;
    $success = false;

    if (file_exists($fileName)){
        unlink($fileName);
        $success = true;
        //delete image details from db if file exists
        $sql = "delete from gallery where id = '$id'";
        $result = mysqli_query($con,$sql);
    }

    if($success && $result){
        echo "1";
    }
?>