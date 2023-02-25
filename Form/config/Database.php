<?php


class Database{


public $pdo;


public function __construct(){
    session_start();
    try{
        $link = new PDO('mysql:host=localhost;dbname=lujtaaa','root','');
        $this->pdo = $link;
    }catch(PDOException $exception){
        die($exception->getMessage());
    }
}

}



?>