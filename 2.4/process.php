<?php

include '../simple-xlsx/simplexlsx.class.php';

$left = "<a href='./' style='display:none;'>Home</a>
<span>";

$xlsx = new SimpleXLSX('left.xlsx');
foreach ($xlsx->rows() as $x=>$row ) {
	if($x!=0){
		$title = $row[1];
		$file = $row[7];
		$type = $row[8];
		$link = $row[9];
		$left .=$row[0].$row[1].$row[2]."
		";
		$myfile = fopen($file.".html", "w") or die("Unable to open file!");
		$text="
		<html>
		<head>
			<title>MathsNZ Students - 2.4 - $title ($type)</title>
			<script src='../jquery.js'></script>
			<script src='../js.js'></script>
			<link href='https://fonts.googleapis.com/css?family=Muli' rel='stylesheet' type='text/css'>
			<link href='../style.css' rel='stylesheet' type='text/css'>
			<link href='../extrastyle.css' rel='stylesheet' type='text/css'>
			<link href='../newstyle.css' rel='stylesheet' type='text/css'>
			<meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no'>
			<link rel='icon' href='http://students.mathsnz.com/favicon.ico' type='image/x-icon'/>
			<link rel='shortcut icon' href='http://students.mathsnz.com/favicon.ico' type='image/x-icon'/>
			<script src='./script.js'></script>
		</head>
		<body>
		<div id=content>
		<a href='whoops' style='z-index:4;position:absolute;left:10px;top:10px;' class=prelesson>< </a>
		<span id=horisontalnav></span>
		<a href='whoops' style='z-index:4;position:absolute;right:10px;top:10px;' class=nextlesson> ></a>
		</div>";

		if($type=='Video'){
			//add the video
			$text.="
			<div id=videoholder style='overflow:auto;'>
				<br>
					<div class='auto-resizable-iframe'>
					  <div>
						<iframe
						 frameborder='0'
						 allowfullscreen=''
						 src='$link'>
						 </iframe>
					  </div>
					</div>
			</div>";
		}

		if($type=='Document'){
			//add the pdf
			$text.="
			<div id=pdfholder>
				<iframe src=\"$link\" style=\"width:100%; height:100%;\" frameborder=\"0\"></iframe>
			</div>";
		}

		if($type=='Questions'){
			//add the questions
			$text.="
			<div id=questionholder style='background-color:#fff;'>
				<iframe src=\"$link\" style=\"width:100%; height:100%;\" frameborder=\"0\"></iframe>
			</div>";
		}

		$text.="
		<div id='rate'></div>
		<div id='sites'></div>
		<div id='header'></div>
		<div id='footer'></div>
		</body>
		</html>";
		fwrite($myfile, $text);
		fclose($myfile);
	}
}

$left .= "</span>
<a href='./' style='display:none;'>Home</a>";
file_put_contents('./left.html', $left);
echo "Done!";
?>
