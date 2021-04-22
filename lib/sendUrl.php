<?php 
    include $_SERVER['DOCUMENT_ROOT'].'/HiSpeaker/lib/lib.php';
    $mp4Url = $_POST['mp4Url'];
	$query = $db->query("select * from data");
	$db->query("UPDATE `data` SET `mp4Url`='$mp4Url'");
?>