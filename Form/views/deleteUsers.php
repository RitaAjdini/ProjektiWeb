<?php
require_once '../controllers/signup-controller.php';


if(isset($_GET['id'])){
$userId = $_GET['id'];
}
$user= new SignupController;
$user->delete($userId);

?>