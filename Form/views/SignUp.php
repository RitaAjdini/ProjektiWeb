<?php

require_once '../controllers/signup-controller.php';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign up form</title>
    <link rel="stylesheet" href="CSS/SignUp.css">
</head>
<body>

    <div class="container">
        <div class="header">
            <h2>Create Account</h2>
        </div>
        <form id="form" class="form" method="POST" action="validimi.php">
            <div class="form-control">
                <label>Username</label>
                <input type="text" placeholder="username" id="username" name="username" />
                <small>Error message</small>
            </div>
            <div class="form-control">
                <label>Email</label>
                <input type="text" placeholder="email" id="email" name="email"/>
                <small>Error message</small>
            </div>
            <div class="form-control">
                <label>Password</label>
                <input type="password" placeholder="password" id="password" name="password"/>
                <small>Error message</small>
            </div>
            <div class="form-control">
                <label>Password check</label>
                <input type="password" placeholder="password check" id="password2" name="passwordRepeat"/>
                <small>Error message</small>
            </div>
            <a href="LoginForm.php">Already have an account?</a>
            <button name='submit'>Sign up</button>
        </form>
    </div>
  <!--  <script src="SignUp..js"></script>-->
</body>
</html>