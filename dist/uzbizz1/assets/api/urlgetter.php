<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *"); 
    $sql_querry = "SELECT p.value FROM `properties` as p WHERE name = 'place_id' ";
    $result = mysqli_query($con, $sql_querry);
    $row=mysqli_fetch_assoc($result);
    echo $row["value"];
?>