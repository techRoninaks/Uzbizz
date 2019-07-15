<?php
	require "init.php";
	header("Content-Type: application/json; charset=UTF-8");
	
	$dataJSON = $_POST["jsonObj"];
    $data = json_decode($dataJSON);
    $serviceItems = "";
    $result_1 = false;
    $result_2 = false;
    $result_3 = false;
    
    $specialChar = array();
    $replaceChar = array();
    $specialChar[0] = "/'/";
    $replaceChar[0] = "\'";
    $specialChar[1] = '/"/';
    $replaceChar[1] = '\"';
    
    $data->service = preg_replace($specialChar,$replaceChar,$data->service);
    $data->quote = preg_replace($specialChar,$replaceChar,$data->quote);
    
    if($data->service !== "" || $data->quote !== ""){
        $sql = "update properties set value='$data->service' where name='service_desc'";
        $result_1 = mysqli_query($con,$sql);
        $sql = "update properties set value='$data->quote' where name='services_quote'";
        $result_2 = mysqli_query($con,$sql);
        if($data->service1 !== ""){
            $serviceItems = $serviceItems.'!~!@'.$data->service1;
        }
        if($data->service2 !== ""){
            $serviceItems = $serviceItems.'!~!@'.$data->service2;
        }
        if($data->service3 !== ""){
            $serviceItems = $serviceItems.'!~!@'.$data->service3;
        }
        if($data->service4 !== ""){
            $serviceItems = $serviceItems.'!~!@'.$data->service4;
        }
        
        $serviceItems = preg_replace($specialChar,$replaceChar,$serviceItems);
        
        $sql = "update properties set value='$serviceItems' where name='services'";
        $result_3 = mysqli_query($con,$sql);
    }

    if($result_1 && $result_2 && $result_3){
        echo '1';
    }
?>