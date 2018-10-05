<?php
require_once 'phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer(true);
$mail->IsSMTP();  // Define que a mensagem será SMTP
$mail->Host       = 'ssl://smtp.gmail.com'; 
$mail->SMTPAuth   = true;  
$mail->Port       = 465; 
$mail->Username   = 'coggiteads@gmail.com';
$mail->Password   = 'coggiteblublu';

if(@$_POST['tipo'] == "contato"){
	$nome     = $_POST['nome-float'];
	$email    = $_POST['email-float'];
	$telefone = $_POST['telefone-float'];
	$tipo = "Contato";
}else{
	$nome     = $_POST['nome'];
	$email    = $_POST['email'];
	$telefone = $_POST['telefone'];
	$tipo = "Interesse";
}

$mail->Subject = 'Cliente '.$nome.' tem interesse na Coggite';
$mail->MsgHTML("<hr>
  <P>Este email foi enviado através da Landing Coggite</P><br><br>
  <p><span style='font-size:14px; color:#c20e1a;'><b>Dados:</b></span><br>

  Nome:<b> $nome </b><br>
  E-mail:<b> $email </b><br>
  Telefone:<b> $telefone </b><br>
  Tipo do E-mail:<b> $tipo </b><br>
  
  <hr>");
$mail->CharSet = 'UTF-8';
$mail->SetFrom($email, $nome); //Remetente
$mail->AddAddress('begfarias@gmail.com', 'Coggite');
$mail->AddAddress('contato@coggite.com.br', 'Coggite');


try {
  $mail->Send();
}catch (phpmailerException $e) {
  echo $e->errorMessage();
}


header('Location: obrigado.html');
exit;

?>