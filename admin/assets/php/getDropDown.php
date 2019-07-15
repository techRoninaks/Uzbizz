<?php
    require "init.php";
    $success = "unsuccessful";
    $sql_query = "SELECT * FROM `status`";
    $result = mysqli_query($con, $sql_query);
    // echo $sql_query;
    $response = array();
    $count = 0;
    while($row = mysqli_fetch_array($result)){
        $success = "successful";
        $response[$count++] = array("id"=>$row["id"],"status"=>$row["status_name"]);
    }
    $result = array("success"=>$success, "result"=>$response);
    echo json_encode(array("data"=>$result));
?>