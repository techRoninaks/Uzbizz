<?php
    require "init.php";
    $success = "unsuccessful";
    $sql_query = "SELECT * FROM gallery ORDER BY date_modified DESC";
    $result = mysqli_query($con, $sql_query);
    $response = array();
    $count = 0;
    while($row = mysqli_fetch_array($result)){
        $success = "successful";
        $response[$count++] = array("id"=>$row["id"], "imgDesc"=>$row["img_description"],"dateModified"=>$row["date_modified"]);
    }
    $result = array("success"=>$success, "result"=>$response);
    echo json_encode(array("data"=>$result));
?>