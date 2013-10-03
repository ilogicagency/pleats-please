<?php

$data = $_REQUEST['base64data'];

if (isset($data)) {
	$image = explode('base64,', $data);

	file_put_contents('../../assets/canvas.png', base64_decode($image[1]));
}



$bg = imagecreatefrompng('../img/bg.png');
$over = imagecreatefrompng('../../assets/canvas.png');

imagealphablending($bg, true);
imagesavealpha($bg, true);

imagecopyresized($bg, $over, 0, 0, 0, 0, 1920, 1080, 1920, 1080);
imagepng($bg, '../../assets/combine.png');

imagedestroy($bg);
imagedestroy($over);



$src = imagecreatefrompng('../../assets/combine.png');
$dest = imagecreatetruecolor(1160, 652);

imagecopyresampled($dest, $src, 0, 0, 0, 0, 1160, 652, 1920, 1080);

imagepng($dest, '../../assets/resize.png');

imagedestroy($src);

unlink('../../assets/combine.png');



$src = imagecreatefrompng('../../assets/resize.png');
$dest = imagecreatetruecolor(1160, 730);

imagecopyresampled($dest, $src, 0, 0, 0, 0, 1160, 730, 1160, 730);

imagepng($dest, '../../assets/resize.png');

imagedestroy($src);



$bg = imagecreatefrompng('../../assets/resize.png');
$over = imagecreatefrompng('../img/frame.png');

imagealphablending($over, true);
imagesavealpha($over, true);

imagecopyresized($bg, $over, 0, 0, 0, 0, 1160, 730, 1160, 730);
imagepng($bg, '../../assets/fb-img-' . time() . '.png');

imagedestroy($bg);
imagedestroy($over);

unlink('../../assets/resize.png');
unlink('../../assets/canvas.png');

$data = new stdClass();
$data->image = 'fb-img-'.time().'.png';

//echo json_encode($data);
echo $data->image;