<?php

include '../simple-xlsx/simplexlsx.class.php';

$xlsx = new SimpleXLSX('left.xlsx');
foreach ($xlsx->rows() as $x=>$row ) {
	if($x!=0){
		$title = $row[1];
		$file = $row[7];
		$video=array();
		if($row[9]!=""){array_push($video,$row[9]);}
		if($row[10]!=""){array_push($video,$row[10]);}
		if($row[11]!=""){array_push($video,$row[11]);}
		$notes=file_exists("./pdfs/$row[6].pdf");
		$videos=(count($video)>0);
		$myfile = fopen($file.".html", "w") or die("Unable to open file!");
		$text="
		<html>
		<head>
			<title>MathsNZ Students - 3.14 - $title</title>
			<script src='../jquery.js'></script>
			<script src='../js.js'></script>
			<link href='https://fonts.googleapis.com/css?family=Muli' rel='stylesheet' type='text/css'>
			<link href='../style.css' rel='stylesheet' type='text/css'>
			<link href='../extrastyle.css' rel='stylesheet' type='text/css'>
			<link rel='icon' href='http://students.mathsnz.com/favicon.ico' type='image/x-icon'/>
			<link rel='shortcut icon' href='http://students.mathsnz.com/favicon.ico' type='image/x-icon'/>
			<script src='./script.js'></script>
		</head>
		<body>
		<span onclick='$(\"#left\").css(\"left\",\"0px\");$(\"body\").css(\"padding-left\",\"250px\");' style='position:absolute;top:55px;left:10px;cursor:pointer;font-size:15px'>Menu &#10140;</span>
		<div id=content>
		<a href='whoops' style='z-index:4;position:absolute;left:10px;top:10px;' class=prelesson>< Previous Lesson</a>
		<a href='whoops' style='z-index:4;position:absolute;right:10px;top:10px;' class=nextlesson>Next Lesson ></a>
		<span style='position:relative;top:10px;'>";
		if($videos){
			$text.="<a href='' class=button onclick='event.preventDefault();$(\"#videoholder\").show();$(\"#pdfholder\").hide();'>Video</a>";
		}
		if($notes){
			$text.="<a href='' class=button onclick='event.preventDefault();$(\"#videoholder\").hide();$(\"#pdfholder\").show();'>Notes / Questions</a>";
		}
		$text.="
		</span>
		</div>
		<div id=pdfholder";
		if($videos || !$notes){
			$text.=" style='display:none'";
		}
		$text.=">
		<iframe src=\"http://docs.google.com/viewer?url=http://students.mathsnz.com/3.14/pdfs/$row[6].pdf&embedded=true\" style=\"width:100%; height:100%;\" frameborder=\"0\"></iframe>
		</div>
		<div id=videoholder style='overflow:auto;";
		if(!$videos){
			$text.="display:none";
		}
		$text.="'>
			<br>";
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
		$text.="
		</div>
		<br>
		<br>";
		if(!$videos && !$notes){
			$text.= "<center>Nothing here... try the <a href='whoops' style='display:inline;float:none;' class=nextlesson>next lesson</a>...</center>";
		}
		$text.="
		<div id='sites'></div>
		<div id='header'></div>
		<div id='footer'></div>
		<div id='left'></div>
		</body>
		</html>";
		fwrite($myfile, $text);
		fclose($myfile);
	}
}
echo "Done!";
?>