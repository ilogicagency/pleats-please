<?php
require('config/config.php');
$path = "uploaded/";

$valid_formats = array("jpg", "png", "gif", "bmp","jpeg");
if(isset($_POST) and $_SERVER['REQUEST_METHOD'] == "POST")
{
$name = $_FILES['photo_img']['name'];
$size = $_FILES['photo_img']['size'];
if(strlen($name))
{
list($txt, $ext) = explode(".", $name);
if(in_array($ext,$valid_formats))
{
if($size<(1024*1024)) // Image size max 1 MB
{
$tmp = $_FILES['photo_img']['tmp_name'];
if(move_uploaded_file($tmp, $path.$name))
{
echo "<img src='uploaded/".$name."' class='preview'>";
}
else
echo "<div class='error_msg'>failed</div>";
}
else
echo "<div class='error_msg'>Image file size max 1 MB</div>"; 
}
else
echo "<div class='error_msg'>Invalid file format..</div>"; 
}
else
echo "<div class='error_msg'>Please select image..!</div>";
exit;
}
?>