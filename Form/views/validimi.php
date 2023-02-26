<?php
require_once '../controllers/signup-controller.php';

$admin1 = array("username" => "Ritaaa", "email" => "rita.admin@ubt-uni.net", "password" => "admin123##$$");
$Adminat =array($admin1);



if(isset($_POST['submit'])){

    $username = $_POST['username'];
    $password = $_POST['password'];
    $passwordRepeat = $_POST['passwordRepeat'];
    $email= $_POST['email'];

    if(empty($username)|| empty($password)|| empty($passwordRepeat)|| empty($email)){
        ?>
        <script>alert("Empty inputs")</script>
        <?php
    }else{
        if(strlen($username)<4){
            ?>
            <script>alert("Invalid username")</script>
        <?php
        }else{
            if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
                ?>
                <script>alert("Invalid email")</script>
            <?php
            }else{
                if(strlen($password)<8){
                    ?>
                <script>alert("Invalid password")</script>
            <?php
                }else{
                    if($password!==$passwordRepeat){
                        ?>
                        <script>alert("Password dont match")</script>
                    <?php
                }else{
                    global $Adminat;
                    foreach ($Adminat as $user) {
                  if ($user['email'] == $email && $user['password'] == $password && $user['username']==$username) {
                  }else{
                    return header("Location: ../../HomePage.php");
                    $signup = new SignupController;
                    $signup->insert($_POST);
                  }
                }
                }
                }       
            }

        }

    }

}



?>