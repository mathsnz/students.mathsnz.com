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
		$notes=$row[12];
		$questions=$row[13];
		$videos=(count($video)>0);
		$myfile = fopen($file.".html", "w") or die("Unable to open file!");
		$text="
		<html>
		<head>
			<title>MathsNZ Students - 3.8 - $title</title>
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
			$text.="<a href='' class=button onclick='event.preventDefault();$(\"#videoholder\").show();$(\"#questionholder\").hide();$(\"#pdfholder\").hide();'>Video</a>";
		}
		if(strlen($notes)>5){
			$text.="<a href='' class=button onclick='event.preventDefault();$(\"#videoholder\").hide();$(\"#questionholder\").hide();$(\"#pdfholder\").show();'>PDF</a>";
		}
		if(strlen($questions)>5){
			$text.="<a href='' class=button onclick='event.preventDefault();$(\"#videoholder\").hide();$(\"#questionholder\").show();$(\"#pdfholder\").hide();'>On-Screen Questions</a>";
		}
		$text.="
		</span>
		</div>";
		
		//add the videos
		$text.="
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
		</div>";
		
		//add the pdf
		$text.="
		<div id=pdfholder";
			if($videos || strlen($notes)<5){
				$text.=" style='display:none'";
			}
			$text.=">
			<iframe src=\"$notes\" style=\"width:100%; height:100%;\" frameborder=\"0\"></iframe>
		</div>";
		
		//add the questions
		$text.="
		<div id=questionholder style='background-color:#fff;";
			if($videos || strlen($notes)>5 || strlen($questions)<5){
				$text.=" display:none;";
			}
			$text.="'>
			<iframe src=\"$questions\" style=\"width:100%; height:100%;\" frameborder=\"0\"></iframe>
		</div>

		<br>
		<br>";
		if(!$videos && strlen($notes)<5 && strlen($questions)<5){
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