<?php

$recepient = "mmalyshko@hotmail.de"; // На какой адресс идет отправка 
$siteName = "scharfe-kante.com"; // Имя сайта

$email = trim($_POST["email"]);
$name = trim($_POST["name"]);
$textarea = trim($_POST["message"]);



$message = "Mail: $email \nИмя: $name \nСообщение: $textarea";

$pagetitle = "Заявка с сайта \"$siteName\"";

mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>
