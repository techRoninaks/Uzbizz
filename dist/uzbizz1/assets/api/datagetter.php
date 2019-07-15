<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *"); 
    $data = array();
    $sql_querry = "SELECT * FROM `properties` ";
    $result = mysqli_query($con, $sql_querry);
    while($row=mysqli_fetch_assoc($result)){
        $data[$row["name"]]= $row["value"];
    }
    echo json_encode($data);
?>