<?php

if (isset($_POST['submit'])){
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $mailfrom = $_POST['mail'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    //requests@highhousegardenweddings.co.uk
    //info@highhousegardenweddings.co.uk
    $to = "requests@highhousegardenweddings.co.uk";
    $subject = "request from ".$name." ".$surname;  
    $headers = 'From: requests@highhousegardenweddings.co.uk' . "\r\n" .
    'Reply-To:' .$mailfrom . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    $txt = "Message from: ".$mailfrom.".\r\nname: ".$name." ".$surname.".\r\nnumber: ".$phone.".\r\n\r\n".$message;
    
    mail($to, $subject, $txt, $headers);
    header("Location: index.html?mailsend");
} 
