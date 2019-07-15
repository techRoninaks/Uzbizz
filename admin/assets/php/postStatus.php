<?php
    require "init.php";
    $status = $_POST['status'];
    $id = $_POST['id'];
    $success = "unsuccessful";
    $sql_query = "UPDATE `enquiry` SET `status`='$status' WHERE id = '$id' ";
    $result = mysqli_query($con, $sql_query);
        // if($result)
    echo json_encode(array("data"=>"$result"));
?>