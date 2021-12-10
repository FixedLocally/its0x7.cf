<?php
// middle is top-left corner of (0,-6) image or coord (0,-3072)
// at z=7, each tile=512x512
const TILES_DIR = "../assets/tiles/day/";
const CACHE_DIR = "../assets/tiles/cache/";
// get vars
$x = @$_GET["x"];
$y = @$_GET["y"];
$z = @$_GET["z"];
// get cache
$cache_file = CACHE_DIR . sprintf("x%sy%sz%s.png", $x, $y, $z);
if (is_file($cache_file)) {
    header('Content-type: image/png');
    header("Cache-Control: max-age=604800");
    readfile($cache_file);
    die();
}
// normalise
$x -= pow(2, $z - 1);
$y -= pow(2, $z - 1);
$z -= 7;
// set top left
$x *= pow(2, 9 - $z);
$y *= pow(2, 9 - $z);
$y -= 3072;
$width = pow(2, 9 - $z);
$fontsize = 5;
// tile params
$tile_x = floor($x / 512);
$tile_y = floor($y / 512);
$file = sprintf("%s,%s.png", $tile_x, $tile_y);
$offset_x = $x - $tile_x * 512;
$offset_y = $y - $tile_y * 512;

// bounds
if ($x < -3000 || $x > 2000) {
    readfile(TILES_DIR . "empty.png");
    die();
}
if ($y < -7000 || $y > 0) {
    readfile(TILES_DIR . "empty.png");
    die();
}

// read and crop the tile
$crop = imagecreatetruecolor(256, 256);
//imagealphablending($crop, false);
imagesavealpha($crop, true);
$bg = imagecolorallocate($crop, 0, 0, 26);
imagealphablending($crop, true);
imagecolortransparent($crop, $bg);
if (is_file(TILES_DIR . $file)) {
    $tile = imagecreatefrompng(TILES_DIR . $file);
    $userImage = imagecopyresampled($crop, $tile,
        0,
        0,
        $offset_x, $offset_y, 256, 256,
        $width, $width);
}

// debug text
//$red = imagecolorallocate($crop, 255, 0, 0);
//imagestring($crop, $fontsize, 8, 0, "x=" . $x, $red);
//imagestring($crop, $fontsize, 8, 12, "y=" . $y, $red);
//imagestring($crop, $fontsize, 8, 24, "z=" . $z, $red);
//imagestring($crop, $fontsize, 8, 36, "w=" . $width, $red);
//imagestring($crop, $fontsize, 8, 48, "tile=" . $file, $red);
//imagestring($crop, $fontsize, 8, 60, "offset=" . $offset_x . "," . $offset_y, $red);

header('Content-type: image/png');
imagepng($crop);
imagepng($crop, $cache_file);
imagedestroy($crop);
