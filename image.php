<?php
function getClientIP() {
    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP'])) {
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    }
    return $ipaddress;
}

$ip = getClientIP();

// 이미지 생성
header("Content-type: image/png");
$im = imagecreate(300, 50);
$background_color = imagecolorallocate($im, 255, 255, 255);
$text_color = imagecolorallocate($im, 0, 0, 0);
imagestring($im, 5, 10, 10, $ip, $text_color);
imagepng($im);
imagedestroy($im);
?>
