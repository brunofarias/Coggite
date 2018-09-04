<?php
require_once 'phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer(true);
$mail->IsSMTP();  // Define que a mensagem será SMTP
$mail->Host       = 'ssl://smtp.gmail.com';
$mail->SMTPAuth   = true;
$mail->Port       = 465;
$mail->Username   = 'operacoes@joggadigital.com.br';
$mail->Password   = 'fernanda0203';

$nome     = $_POST['nome'];
$email    = $_POST['email'];
$telefone = $_POST['telefone'];

$mail->Subject = 'Cliente '.$nome.' Tem Interesse na Landing Coggite';
$mail->MsgHTML("<hr>
  <P>Este email foi enviado através da Landing Coggite</P><br><br>
  <p><span style='font-size:14px; color:#c20e1a;'><b>Dados:</b></span><br>

  Nome:<b> $nome </b><br>
  E-mail:<b> $email </b><br>
  Telefone:<b> $telefone </b><br>
  
  <hr>");
$mail->CharSet = 'UTF-8';
$mail->SetFrom($email, $nome); //Remetente
$mail->AddAddress('bruno.farias@joggadigital.com.br', 'Coggite');


try {
  $mail->Send();
}catch (phpmailerException $e) {
  echo $e->errorMessage();
}


header('Location: obrigado.html');
exit;

?>