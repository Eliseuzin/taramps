<?php 
$dbHost="localhost";
$dbUsername="root";
$dbPassword="";
$dbDatabase="clientes";

$conexao= new mysqli($dbHost,$dbUsername,$dbPassword,$dbDatabase);

if ($conexao->connect_errno) {
  echo"erro ao conectar";
}else{
  echo"Tudo ccerto!";
}
?>