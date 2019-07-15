<?php
    require "init.php";
    $success = "unsuccessful";
    $sql_query = "select * from gallery order by date_modified desc limit 5";
    $result = mysqli_query($con, $sql_query);
    // echo $sql_query;
    $response = array();
    $count = 0;
    while($row = mysqli_fetch_array($result)){
        $success = "successful";
        $response[$count++] = array("id"=>$row["id"],"imgPath"=>$row["img_path"], "imgDesc"=>$row["img_description"],"dateModified"=>$row["date_modified"]);
    }
    $result = array("success"=>$success, "result"=>$response);
    echo json_encode(array("data"=>$result));
?>