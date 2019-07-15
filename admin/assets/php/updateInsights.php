<?php
	require "init.php";
	header("Content-Type: application/json; charset=UTF-8");
	
	$dataJSON = $_POST["jsonObj"];
    $data = json_decode($dataJSON);
    $insightItems = "";
    $result_1 = false;
    $result_2 = false;
    $result_3 = false;
    
    $specialChar = array();
    $replaceChar = array();
    $specialChar[0] = "/'/";
    $replaceChar[0] = "\'";
    $specialChar[1] = '/"/';
    $replaceChar[1] = '\"';

    if($data->insights !== "" || $data->quote !== ""){
        $data->insights = preg_replace($specialChar,$replaceChar,$data->insights);
        $data->quote = preg_replace($specialChar,$replaceChar,$data->quote);
        
        $sql = "update properties set value='$data->insights' where name='insights_subheading'";
        $result_1 = mysqli_query($con,$sql);
        $sql = "update properties set value='$data->quote' where name='insight_quote'";
        $result_2 = mysqli_query($con,$sql);
        if($data->head1 !== "" && $data->desc1 !== ""){
            $insightItems = $insightItems.$data->head1.'!@'.$data->desc1.'!~';
        }
        if($data->head2 !== "" && $data->desc2 !== ""){
            $insightItems = $insightItems.$data->head2.'!@'.$data->desc2.'!~';
        }
        if($data->head3 !== "" && $data->desc3 !== ""){
            $insightItems = $insightItems.$data->head3.'!@'.$data->desc3.'!~';
        }
        
        $insightItems = preg_replace($specialChar,$replaceChar,$insightItems);
        $sql = "update properties set value='$insightItems' where name='insight_desc'";
        $result_3 = mysqli_query($con,$sql);
    }

    if($result_1 && $result_2 && $result_3){
        echo '1';
    }
?>