<?php

    header("Access-Control-Allow-Origin: *");    
    $db_name = "u694003942_uzbiz";
    $username = "u694003942_uzbiz";
    $pass = "uzbiztemp";
    $servername = "localhost";

    // $db_name = "uzbizz";
    // $username = "root";
    // $pass = "";
    // $servername = "localhost";

    $con = new mysqli($servername, $username, $pass, $db_name);
    // Check connection		
    if ($con->connect_error) {
       die("Connection failed: " . $con->connect_error);
    }
?>
