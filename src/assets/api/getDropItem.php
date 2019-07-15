<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *"); 
    $data = array();
    $sql = "SELECT * FROM `dropdown`";
    $result = mysqli_query($con, $sql);
    $count = 0;
    while($row=mysqli_fetch_assoc($result)){
        $data[$count] = array("id"=>$row['id'],'dropitem'=>$row['dropitem']);
        $count++;
    }
    echo json_encode($data);
?>