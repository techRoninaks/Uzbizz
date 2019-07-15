<?php
	require "init.php";
	header("Content-Type: application/json; charset=UTF-8");
	
	$dataJSON = $_POST["jsonObj"];
    $data = json_decode($dataJSON);
    
    $sql = "select id from gallery order by id desc limit 1";
    $result = mysqli_query($con,$sql);
    $row = mysqli_fetch_array($result);
    
    $result_2 = false;
    $imgName = $row[0]+1;

    if($data->image!=null || $data->image!= "" ){
        $truePath = "assets/image/gallery/".$imgName.".png";
        $path = "../../../assets/image/gallery/";
        $img = explode(",", $data->image);
        define('UPLOAD_DIR', $path);
        $img[1] = str_replace(' ', '+', $img[1]);
        $imgData = base64_decode($img[1]);
        $file = UPLOAD_DIR.$imgName.'.png';
        $success = file_put_contents($file, $imgData);
 
        if($success){
            $sql_2 = "insert into gallery (`id`,`img_path`,`img_description`) values ('$imgName','$truePath','$data->imgDesc')";
            $result_2 = mysqli_query($con,$sql_2);
        }
    }
    if($result_2 && $result){
        echo '1';
    }
?>