<?php
require_once '../config/Database.php';

class SignupController{

public $db;

public function __construct(){
    $this->db = new Database();
}


//READ

public function readData(){
    $query = $this->db->pdo->query('SELECT * FROM users');
    return $query->fetchAll();
}


//CREATE ose INSERT
public function insert($request){
   

$query = $this->db->pdo->prepare('INSERT INTO users(username,email,password,passwordRepeat)VALUES(:username,:email,:password,:passwordRepeat)');
$query->bindParam(':username',$request['username']);
$query->bindParam(':email',$request['email']);

$passwordHash = hash("md5",$request['password'],binary:false);
$repeatHash = hash("md5",$request['passwordRepeat'],binary:false);
$query->bindParam(':password',$passwordHash);
$query->bindParam(':passwordRepeat', $repeatHash);
$query->execute();
}


//hapi i pare i update eshte edit
public function edit($id){
$query = $this->db->pdo->prepare('SELECT * from users WHERE id=:id');
$query->bindParam(':id',$id);
$query->execute();
return $query->fetch();
}
//update
public function update($request,$id){
$query = $this->db->pdo->prepare('UPDATE users  SET username=:username,email=:email,password=:password,passwordRepeat=:passwordRepeat WHERE id=:id');
$query->bindParam(':id',$id);
$query->bindParam(':username',$request['username']);
$query->bindParam(':email',$request['email']);
$passwordHash = hash("md5",$request['password'],binary:false);
$query->bindParam(':password',$passwordHash);
$repeatHash = hash("md5",$request['passwordRepeat'],binary:false);
$query->bindParam(':passwordRepeat', $repeatHash);
$query->execute();
return header('Location: signup-dashboard.php');

}


public function delete($id){
$query=$this->db->pdo->prepare('DELETE from users WHERE id=:id');
$query->bindParam(':id',$id);
$query->execute();
return header('Location: signup-dashboard.php');
}

}

?>