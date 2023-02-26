<?php

require_once '../controllers/signup-controller.php';

?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet"  type ="text/css"  href="CSS/dashboard.css">
    </head>
    <body>
    <table class="content-table">
        <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Password check</th>
              <th></th>
              <th></th>
            </tr>
        </thead>
        <tbody>
        <?php
          $s= new SignupController;
          $allUsers=$s->readData();
          foreach($allUsers as $user):
          ?>
          <tr>
            <td><?php echo $user['username'];?></td>
            <td><?php echo $user['email'];?></td>
            <td><?php echo $user['password'];?></td>
            <td><?php echo $user['passwordRepeat'];?></td>
            <td><a href="editUsers.php?id=<?php echo $user['id'];?>">Edit</a></td>
            <td><a href="deleteUsers.php?id=<?php echo $user['id']?>">Delete</a></td>
          </tr>
          <?php
          endforeach;
          ?>
        </tbody>
</table>
        
        
    </body>
</html>