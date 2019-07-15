<?php
    require "init.php";
    $postName = $_POST["name"];
    $postMail = $_POST["email"];
    $postPhone = $_POST["phone"];
    $postMessage = $_POST["message"];
    $postPurpose = $_POST["Purpose"];
    $postTranslator = $_POST["Translator"];
    $postEducation = $_POST["Education"];
    $postSell = $_POST["Sell"];
    $postGuide = $_POST["Guide"];
    $postBuy = $_POST["Buy"];
    // echo $postPurpose;

    $binary = "00000";
    // $isSub = 0;
    // if($postnews == "true" ){
    //     $isSub = 1;
    // }

    if($postTranslator == "true"){
        $binary{0}='1';
    }
    if($postEducation == "true"){
        $binary{1}='1';
    }
    if($postSell == "true"){
        $binary{2}='1';
    }
    if($postGuide == "true"){
        $binary{3}='1';
    }
    if($postBuy == "true"){
        $binary{4}='1';
    }
    
    // echo $binary;

    $message = "Hai $postName, You have successfully subscribed to Uzbizz.com services.";
    $curl = curl_init();
    $authentication_key = '283530AzridXiS2l5f5d1b5c33';

    curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.msg91.com/api/sendhttp.php?mobiles=$postPhone&authkey=$authentication_key&route=4&sender=TESTIN&message=$message&country=0",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => "",
    CURLOPT_SSL_VERIFYHOST => 0,
    CURLOPT_SSL_VERIFYPEER => 0,
    ));

    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    if ($err) {
    // echo "cURL Error #:" . $err;
    } else {
    // echo $response;
    }

    $to = $postMail;
    $subject = "Uzbizz.com Subscribtion";
    $txt = "Hello $postName,". "\r\n\r\n"."You have subscribed to Uzbizz.com services.". "\r\n\r\n"."Regards,\r\nUzbizz.com";
    $headers = "From: info@uzbizz.com" . "\r\n" .
    "CC: ashishak@roninaks.com";
    
    mail($to,$subject,$txt,$headers);

    $sql_cmd = "INSERT INTO `enquiry`( `name`, `email`, `phone`, `message`,`purpose`,`service`,`stage`) VALUES ('$postName','$postMail','$postPhone','$postMessage','$postPurpose', '$binary','0')";
    $result = mysqli_query($con, $sql_cmd);
    echo $result;
?>