<?php
    global $mysqli;
    $mysqli = new mysqli("mysql-xavfro.alwaysdata.net","xavfro","rootroot","xavfro_handisos");
    if($mysqli->connect_errno){
        die ("<center><h2> Erreur de connexion à la BDD : ".$mysqli-> connect_errno . " " . $mysqli->connect_error . "</h2></center>"); 
    };
    $req="set names utf8";
    $mysqli->query($req);
    if ($mysqli->errno){
        die ("<center><h2>Erreur SQL : " . $mysqli->errno . " " . $mysqli->error . "</h2></center>");
    };

    session_start();