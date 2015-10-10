<?php

include '../simple-xlsx/simplexlsx.class.php';

$xlsx = new SimpleXLSX('left.xlsx');
foreach ($xlsx->rows() as $row ) {
	$title = $row[1];
	$file = $row[7];
	$pages = $row[9];
	$video=array();
	$video[1] = $row[10];
	$video[2] = $row[11];
	$video[3] = $row[12];
	$myfile = fopen($file.".html", "w") or die("Unable to open file!");
$text="
<html>
<head>
	<title>MathsNZ Students - 3.14</title>
	<script src='../jquery.js'></script>
	<script src='../js.js'></script>
	<link href='https://fonts.googleapis.com/css?family=Muli' rel='stylesheet' type='text/css'>
	<link href='../style.css' rel='stylesheet' type='text/css'>
	<link href='../extrastyle.css' rel='stylesheet' type='text/css'>
	<link rel='icon' href='http://students.mathsnz.com/favicon.ico' type='image/x-icon'/>
	<link rel='shortcut icon' href='http://students.mathsnz.com/favicon.ico' type='image/x-icon'/>
	<script> 
	  var title='$title'; 
	</script> 
	<script src='./script.js'></script>
</head>
<body>
<span onclick='$(\"#left\").css(\"left\",\"0px\");$(\"body\").css(\"padding-left\",\"250px\");' style='position:absolute;top:55px;left:10px;cursor:pointer;font-size:15px'>Menu &#10140;</span>
<div id=content>
<a href='whoops' class=prelesson>< Previous Lesson</a>
<a href='whoops' class=nextlesson>Next Lesson ></a>
<br>
<h1 id=pagetitle></h1>";
foreach ($video as $vid) {
	if($vid!=""){
		$text.="
<div class='auto-resizable-iframe'>
  <div>
    <iframe
     frameborder='0'
     allowfullscreen=''
     src='http://www.youtube.com/embed/$vid'>
     </iframe>
  </div>
</div>
";
	}
}
$i=0;
while ($i<$pages){
	$i++;
	$text.="<img src='./images/{$file}.{$i}.png' class='page-image' style='width:100%'><br>";
}
$text.="
<br>
<a href='whoops' class='prelesson'>< Previous Lesson</a>
<a href='whoops' class='nextlesson'>Next Lesson ></a>
</div>
<div id='sites'></div>
<div id='header'></div>
<div id='footer'></div>
<div id='left'></div>
</body>
</html>";
	fwrite($myfile, $text);
	fclose($myfile);
};
echo "Done!";
?>