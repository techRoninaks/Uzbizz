<?php
    require "init.php";
    // header("Access-Control-Allow-Origin: *"); 
    $pageNo = $_POST['page'];
    $data = array();
    $pagelimit = 6;
    $offset = ($pageNo-1) * 6 ;
    $sql = "SELECT COUNT(id) FROM `gallery`";
    $result = mysqli_query($con, $sql);
    $row=mysqli_fetch_assoc($result);
    $count = 1;
    $data[0] = array("totalPage"=>($row['COUNT(id)'] /$pagelimit), "currentPage"=>$pageNo);
    $sql_querry = "SELECT * FROM `gallery` LIMIT $pagelimit OFFSET $offset";
    $result = mysqli_query($con, $sql_querry);
    while($row=mysqli_fetch_assoc($result)){
        $data[$count] = array("id"=>$row['id'],'image'=>$row['img_path'],'imgdes'=>$row['img_description']);
        $count++;
    }
    echo json_encode($data);
?>