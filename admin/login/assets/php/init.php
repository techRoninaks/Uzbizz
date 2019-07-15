<?php

    header("Access-Control-Allow-Origin: *");    
    $db_name = "u694003942_uzbiz";
    $username = "u694003942_uzbiz";
    $pass = "uzbiztemp";
    $servername = "localhost";

    $con = new mysqli($servername, $username, $pass, $db_name);
    $conn = $con;
    // Check connection		
    if ($con->connect_error) {
       die("Connection failed: " . $con->connect_error);
    }
?>
