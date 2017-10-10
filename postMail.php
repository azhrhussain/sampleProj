<?php
// ini_set('max_execution_time', 0);
if (isset($_REQUEST['contactus'])) {
	// =======================
	// Contact US FORM
	// =======================


		$name = $email = $contact = $city = $country = $message = false;
		if (isset($_REQUEST['name'])) { $name = $_REQUEST['name']; }
		if (isset($_REQUEST['email'])) { $email = $_REQUEST['email']; }
		if (isset($_REQUEST['contact'])) { $contact = $_REQUEST['contact']; }
		if (isset($_REQUEST['city'])) { $city = $_REQUEST['city']; }
		if (isset($_REQUEST['country'])) { $country = $_REQUEST['country']; }
		if (isset($_REQUEST['message'])) { $message = $_REQUEST['message']; }



		$msg = '<!DOCTYPE html>';
			$msg .= '<html>';
			$msg .= '<head>';
			$msg .= '</head>';
			$msg .= '<body>';
			$msg .= '<h2 style="font-family: arial, sans-serif;width: 100%;">Contact Form</h2>';
			$msg .= '<table style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">';
			  $msg .= '<tr>';
			    $msg .= '<th style="min-width: 100px;border: 1px solid #dddddd;text-align: left;padding: 8px;">Name</td>';
			    $msg .= '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$name.'</td>';
			  $msg .= '</tr>';
			  $msg .= '<tr>';
			    $msg .= '<th style="min-width: 100px;border: 1px solid #dddddd;text-align: left;padding: 8px;">Email</td>';
			    $msg .= '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$email.'</td>';
			  $msg .= '</tr>';
			  $msg .= '<tr>';
			    $msg .= '<th style="min-width: 100px;border: 1px solid #dddddd;text-align: left;padding: 8px;">Contact</td>';
			    $msg .= '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$contact.'</td>';
			  $msg .= '</tr>';
			  $msg .= '<tr>';
			    $msg .= '<th style="min-width: 100px;border: 1px solid #dddddd;text-align: left;padding: 8px;">City</td>';
			    $msg .= '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$city.'</td>';
			  $msg .= '</tr>';
			  $msg .= '<tr>';
			    $msg .= '<th style="min-width: 100px;border: 1px solid #dddddd;text-align: left;padding: 8px;">Country</td>';
			    $msg .= '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$country.'</td>';
			  $msg .= '</tr>';
			  $msg .= '<tr>';
			    $msg .= '<th style="min-width: 100px;border: 1px solid #dddddd;text-align: left;padding: 8px;">Message</th>';
			    $msg .= '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$message.'</td>';
			  $msg .= '</tr>';
			$msg .= '</table>';
			$msg .= '</body>';
		$msg .= '</html>';




}elseif (isset($_REQUEST['demoform'])){
	// ===============================
	// Requesting a Demo
	// ===============================


		$fname = $lname = $email = $contact = $needsSel = $representSel = $physiciansSel = $comments = false;
		if (isset($_REQUEST['fname'])) { $fname = $_REQUEST['fname']; }
		if (isset($_REQUEST['lname'])) { $lname = $_REQUEST['lname']; }
		if (isset($_REQUEST['email'])) { $email = $_REQUEST['email']; }
		if (isset($_REQUEST['contact'])) { $contact = $_REQUEST['contact']; }
		if (isset($_REQUEST['needsSel'])) { $needsSel = $_REQUEST['needsSel']; }
		if (isset($_REQUEST['representSel'])) { $representSel = $_REQUEST['representSel']; }
		if (isset($_REQUEST['physiciansSel'])) { $physiciansSel = $_REQUEST['physiciansSel']; }
		if (isset($_REQUEST['comments'])) { $comments = $_REQUEST['comments']; }



		$msg = '<!DOCTYPE html>';
			$msg .= '<html>';
			$msg .= '<head>';
			$msg .= '</head>';
			$msg .= '<body>';
			$msg .= '<h2 style="font-family: arial, sans-serif;width: 100%;">Request a Demo</h2>';
			$msg .= '<table style="font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">';
			  $msg .= '<tr>';
			    $msg .= '<th style="min-width: 100px;border: 1px solid #dddddd;text-align: left;padding: 8px;">First Name</td>';
			    $msg .= '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$fname.'</td>';
			  $msg .= '</tr>';
			  $msg .= '<tr>';
			    $msg .= '<th style="min-width: 100px;border: 1px solid #dddddd;text-align: left;padding: 8px;">Last Name</td>';
			    $msg .= '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$lname.'</td>';
			  $msg .= '</tr>';
			  $msg .= '<tr>';
			    $msg .= '<th style="min-width: 100px;border: 1px solid #dddddd;text-align: left;padding: 8px;">Email"</td>';
			    $msg .= '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$email.'</td>';
			  $msg .= '</tr>';
			  $msg .= '<tr>';
			    $msg .= '<th style="min-width: 100px;border: 1px solid #dddddd;text-align: left;padding: 8px;">Phone Number</td>';
			    $msg .= '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$contact.'</td>';
			  $msg .= '</tr>';
			  $msg .= '<tr>';
			    $msg .= '<th style="min-width: 100px;border: 1px solid #dddddd;text-align: left;padding: 8px;">EHR Needs</td>';
			    $msg .= '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$needsSel.'</td>';
			  $msg .= '</tr>';
			  $msg .= '<tr>';
			    $msg .= '<th style="min-width: 100px;border: 1px solid #dddddd;text-align: left;padding: 8px;">I represent</td>';
			    $msg .= '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$representSel.'</td>';
			  $msg .= '</tr>';
			  $msg .= '<tr>';
			    $msg .= '<th style="min-width: 100px;border: 1px solid #dddddd;text-align: left;padding: 8px;">No of physicians</td>';
			    $msg .= '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$physiciansSel.'</td>';
			  $msg .= '</tr>';
			  $msg .= '<tr>';
			    $msg .= '<th style="min-width: 100px;border: 1px solid #dddddd;text-align: left;padding: 8px;">Message</td>';
			    $msg .= '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$comments.'</td>';
			  $msg .= '</tr>';
			$msg .= '</table>';
			$msg .= '</body>';
		$msg .= '</html>';




}


require 'smtp/PHPMailerAutoload.php';
require 'smtp/class.smtp.php';

$mail = new PHPMailer();

/*Works*/
$mail->IsSMTP();  // telling the class to use SMTP
// $mail->SMTPDebug = 2;
$mail->Mailer = "smtp";
$mail->Host = "smtp.mdvision.net";
// $mail->Port = 25;
$mail->SMTPAuth = true; // turn on SMTP authentication
$mail->Username = "hr@mdvision.net";
// $mail->Password = "Password1!";
$mail->Password = "MD@vision@hr";
$mail->SMTPSecure = false;



$mail->smtpConnect([
    'ssl' => [
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    ]
]);
$mail->clearAllRecipients();

$mail->AddAddress("hbashir@sovms.com","HR - MDVision");
// $mail->AddAddress("smehmood@sqovms.com","TL - MDVision");

$mail->SetFrom("hr@mdvision.net", "HR - MDVision");
$mail->AddReplyTo("no-reply@mdvision.net","Do not reply!");
$mail->isHTML(true); 
// include('leave-notice-template.php');

$mail->Subject  = "Leave Status Pending";
// $mail->Body    = "ehlloo";
$mail->Body    = $msg;
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
$mail->WordWrap = 50;

if(!$mail->Send()) {
	echo 'Message was not sent.';
	// echo 'Mailer error: ' . $mail->ErrorInfo;
} else {
	echo 'Message has been sent to ';
	// header('Location: http://www.example.com/');
}

if (isset($_REQUEST['contactus'])) {
	header('Location: contact.html');
	die;	
}else{
	header('Location: request-a-demo.html');
	die;		
}