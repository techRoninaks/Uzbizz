<?php
	require "init.php";
	header("Content-Type: application/json; charset=UTF-8");
	
	$dataJSON = $_POST["jsonObj"];
    $data = json_decode($dataJSON);
    $result_1 = false;
    $result_2 = false;
    $result_3 = false;
    
    $specialChar = array();
    $replaceChar = array();
    $specialChar[0] = "/'/";
    $replaceChar[0] = "\'";
    $specialChar[1] = '/"/';
    $replaceChar[1] = '\"';
    $tagsBeforeId = '<iframe class="map" id="iframeid" style="height: 100%;padding: 25px;border: 0;width: 100%;" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU&amp;q=place_id:';
    $tagsAfterId = '"></iframe>';
    
    if($data->receiver !== "" || $data->map !== ""){
        $data->address = preg_replace($specialChar,$replaceChar,$data->address);
        
        // $location = preg_replace($specialChar,$replaceChar,$location);
        
        $sql = "update properties set value='$data->receiver' where name='mailto_address'";
        $result_1 = mysqli_query($con,$sql);
        $sql = "update properties set value='$data->person' where name='contact_person'";
        $result_2 = mysqli_query($con,$sql);
        $sql = "update properties set value='$data->phone' where name='contact_phone'";
        $result_3 = mysqli_query($con,$sql);
        $sql = "update properties set value='$data->email' where name='contact_email'";
        $result_4 = mysqli_query($con,$sql);
        $sql = "update properties set value='$data->address' where name='address'";
        $result_5 = mysqli_query($con,$sql);
        $sql = "update properties set value='$tagsBeforeId$data->map$tagsAfterId' where name='place_id'";
        $result_6 = mysqli_query($con,$sql);
        // echo $sql;
    }

    if($result_1 && $result_2 && $result_3 && $result_4 && $result_5 && $result_6){
        echo '1';
    }
?>