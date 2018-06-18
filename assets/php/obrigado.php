<?php
require_once 'phpmailer/PHPMailerAutoload.php';

function httpPost($url,$params){
  $postData = '';
 //create name value pairs seperated by &
 foreach($params as $k => $v)
 {
    $postData .= $k . '='.$v.'&';
 }
 $postData = rtrim($postData, '&');

  $ch = curl_init();
  curl_setopt($ch,CURLOPT_URL,$url);
  curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
  curl_setopt($ch,CURLOPT_HEADER, false);
  curl_setopt($ch, CURLOPT_POST, count($postData));
  curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
  $output=curl_exec($ch);
  curl_close($ch);
  return $output;
}

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
$tipo = $_POST['tipo'];

$mail->Subject = 'Cliente '.$nome.' da Landpage para '.$tipo;
$mail->MsgHTML("<hr>
  <P>Este email foi enviado através da Landing</P><br><br><br>
  <p><span style='font-size:14px; color:#c20e1a;'><b>Dados:</b></span><br>

  Nome:<b> $nome </b><br>
  E-mail:<b> $email </b><br>
  Telefone:<b> $telefone </b><br>
  Tipo:<b> $tipo </b><br>
  <hr>");
$mail->CharSet = 'UTF-8';
$mail->SetFrom($email, $nome); //Remetente
// $mail->AddAddress('contaxxxxxxxxxto@maissaudepet.com', 'MafMed');
// $mail->AddAddress('paulo.brito@joggadigital.com.br', 'MafMed');

try {
$mail->Send();
}catch (phpmailerException $e) {
echo $e->errorMessage();
}

// $params = array(
// "id_adwords" => "xxxxxxxxxxxxxx",
// "lead_nome" => $nome,
// "lead_email" => $email,
// "lead_celular" => $telefone,

// );

// echo httpPost("http://www.joggadigital.com.br/dsh/webservice/post.php",$params);

?>