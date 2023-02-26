<?php

require_once '../controllers/signup-controller.php';

$admin1 = array("username" => "Ritaaa", "email" => "rita.admin@ubt-uni.net", "password" => "admin123##$$");
$Adminat =array($admin1);
$isAdmin = false;


if(isset($_POST['submit'])){
    $username = $_POST['username'];
    $password = $_POST['password'];

    $s = new SignupController;

foreach($Adminat as $ad){
    if($ad['username'] == $username && $ad['password']==$password){
        $isAdmin = true;
        return header("Location: signup-dashboard.php");
    }
}


}




?>