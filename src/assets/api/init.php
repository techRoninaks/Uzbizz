<?php

    header("Access-Control-Allow-Origin: *");    
    $db_name = "u694003942_uzbiz";
    $user_name = "u694003942_uzbiz";
    $user_pass = "uzbiztemp";
    $server_name = "localhost";
    // $db_name = "uzbizz";
    // $user_name = "root";
    // $user_pass = "";
    // $server_name = "localhost";

    $con = mysqli_connect($server_name,$user_name,$user_pass,$db_name);
    $success = "Hello";
    
    if(!$con)
    {
        //  echo json_encode(array("response"=>"Cannot connect to database. ".mysqli_connect_error()));
    }
    else
    {
        // echo "success";
    }
?>