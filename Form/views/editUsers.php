<?php
require_once '../controllers/signup-controller.php';

if(isset($_GET['id'])){
    $userId = $_GET['id'];
}

$user = new SignupController;
$current = $user->edit($userId);

if(isset($_POST['submit'])){
$user->update($_POST,$userId);
}

?>

<form method="POST">
        Username:
        <input type="text" name='username' value="<?php echo $current['username'];?>">
        <br>
        Email:
        <input type="text" name='email'  value="<?php echo $current['email'];?>">
        <br>
        Password:
        <input type="password" name='password'  value="<?php echo $current['password'];?>">
        PasswordCheck:
        <input type="password" name='passwordRepeat'  value="<?php echo $current['passwordRepeat'];?>">
        <input type="submit" name='submit' value='update'>
    </form>