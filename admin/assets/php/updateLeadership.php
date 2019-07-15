<?php
	require "init.php";
	header("Content-Type: application/json; charset=UTF-8");
	
	$dataJSON = $_POST["jsonObj"];
    $data = json_decode($dataJSON);    
    $imgName = "leaderPhoto";
    $result_1 = false;
    $result_2 = false;
    $success = true;
    
    $specialChar = array();
    $replaceChar = array();
    $specialChar[0] = "/'/";
    $replaceChar[0] = "\'";
    $specialChar[1] = '/"/';
    $replaceChar[1] = '\"';
    
    $data->leaderAbout = preg_replace($specialChar,$replaceChar,$data->leaderAbout);
    
    if($data->leaderName !== "" && $data->leaderAbout !== "" ){
        $sql_1 = "update properties set value='$data->leaderName' where name='leadership_person'";
        $result_1 = mysqli_query($con,$sql_1);
        $sql_2 = "update properties set value='$data->leaderAbout' where name='leadership_desc'";
        $result_2 = mysqli_query($con,$sql_2);
    }
    
    if($data->image!=null || $data->image!= "" ){
        $path = "../../../assets/image/";
        $img = explode(",", $data->image);
        define('UPLOAD_DIR', $path);
        $img[1] = str_replace(' ', '+', $img[1]);
        $imgData = base64_decode($img[1]);
        $file = UPLOAD_DIR.$imgName.'.png';
        $success = file_put_contents($file, $imgData);
        $imgPath = "assets/image/".$imgName.".png?".date('Y-m-d');
        
        if($success){
            $sql_3 = "update properties set value='$imgPath' where name='leadership_img'";
            $result_3 = mysqli_query($con,$sql_3);
        }
    }

    if($result_2 && $result_1 && $success){
        echo '1';
    }
?>