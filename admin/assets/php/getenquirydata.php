<?php
    require "init.php";
    $success = "unsuccessful";
    $sql_query = "SELECT * FROM `enquiry` ORDER BY `enquiry`.`id` ASC LIMIT 15";
    $result = mysqli_query($con, $sql_query);
    // echo $sql_query;
    $response = array();
    $count = 0;
    while($row = mysqli_fetch_array($result)){
        $success = "successful";
        $response[$count++] = array("id"=>$row["id"],"name"=>$row["name"], "email"=>$row["email"],"phone"=>$row["phone"],"message"=>$row["message"],"isSubscribe"=>$row["isSubscribe"],"purpose"=>$row["purpose"],"service"=>$row["service"],"service"=>$row["service"],"stage"=>$row["stage"],"status"=>$row["status"]);
    }
    $result = array("success"=>$success, "result"=>$response);
    echo json_encode(array("data"=>$result));
?>