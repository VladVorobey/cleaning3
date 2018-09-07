<?php
	$SITE_TITLE = 'Корпорация Городских Концессий';
	$SITE_DESCR = '';

	if ( isset($_POST) ) {
		$name = htmlspecialchars(trim($_POST['name']));
		$email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : '';
		$subject = isset($_POST['subject']) ? htmlspecialchars(trim($_POST['subject'])) : '';
		$services = isset($_POST['droplist']) ? htmlspecialchars(trim($_POST['droplist'])) : '';
		$to = 'Elena357910@yandex.com';

		$headers = "From: $SITE_TITLE \r\n";
		$headers .= "Reply-To: ". $email . "\r\n";
		$headers .= "Content-Type: text/html; charset=utf-8\r\n";

		$data = '<h1>'.$subject."</h1>";
		$data .= 'Имя: '.$name."<br>";
		$data .= 'Email: '.$email."<br>";


		if ( $services) {
			$data .= 'Вид услуги: ' . $services ."<br>";
		}
		$message = "<div style='background:#ccc;border-radius:10px;padding:20px;'>
				".$data."
				<br>\n
				<hr>\n
				<br>\n
				<small>это сообщение было отправлено с сайта ".$SITE_TITLE." - ".$SITE_DESCR.", отвечать на него не надо</small>\n</div>";
		$send = mail($to, $subject, $message, $headers);

		if ( $send ) {
			echo '';
		} else {
				echo '<div class="error">Ошибка отправки формы</div>';
		}

	}
	else {
			echo '<div class="error">Ошибка, данные формы не переданы.</div>';
	}
	die();
?>