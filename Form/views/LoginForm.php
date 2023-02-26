<?php

require_once '../controllers/signup-controller.php';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LoginForm</title>
    <link rel="stylesheet" href="CSS/LoginForm.css">
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Log In</h2>
        </div>
        <form id="form" class="form" method="POST" action="validimiLogin.php">
            <div class="form-control">
                <label>Username</label>
                <input type="text" placeholder="username" id="username" name="username" />
                <small>Error message</small>
            </div>
            <div class="form-control">
                <label>Password</label>
                <input type="password" placeholder="password" id="password" name="password"/>
                <small>Error message</small>
            </div>
            <a href="SignUp.php">Don't have an account?</a>
            <button name='submit'>Log In</button>
        </form>
    </div>
   <!-- <script src="LoginForm.js"></script>-->
</body>
</html>