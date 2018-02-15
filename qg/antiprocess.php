<?php


$file = 'allquestions.html';

$contents = file_get_contents($file);
$lines = explode("
",$contents);

$sort = 0;

foreach($lines as $line){
	if(strpos($line,"<div class=addquestion>Add</div></div>")>-1){
		continue;
	}
	$line = str_replace("<select class=addselect>","",$line);
	$line = str_replace("<div>","",$line);
	$line = str_replace("<option value=","",$line);
	$line = str_replace("</option>","",$line);
	$line = str_replace("<span class=type>","",$line);
	$line = str_replace("</span>","",$line);
	$line = str_replace(" <standards>","|",$line);
	$line = str_replace("</standards>","",$line);
	$line = explode(">",$line,2);
	if(strlen($line[0])<3){
		continue;
	}
	if(count($line)==1){
		$topic = $line[0];
		$topic = trim($topic);
		$topic = explode("|",$topic);
		if(count($topic)==1){
			$topic = $topic[0];
			if($topic=="Lesson Titles"){
				$sort = 99;
			} else if($topic=="Geometry"){
				$sort = 0.09;
			} else if($topic=="Statistics"){
				$sort = "0.10";
			} else {
				$sort+=0.01;
			}
		} else {
			$sort = $topic[1];
			$topic = $topic[0]." <standard>".$sort."</standard>";
			$sort = str_replace("(","",$sort);
			$sort = str_replace(")","",$sort);
			$sort = trim($sort);
			if($sort=="1.6, 1.7"){
				$sort = 1.6;
			}
			if(strlen($sort)==3){
				$level = floor($sort);
				$standard = $sort - $level;
				$standard = $standard / 10;
				$sort = $level+$standard;
			}
		}
		echo "Topic: $topic - $sort<br>";
		continue;
	}
	$f = $line[0];
	$title = $line[1];
	
	$content = "/*
Sort:|$sort|
Question Type:|$topic|
Question Name:|$title|
*/	

";
	$f = "./questions/$f.js";
	$fileContents = file_get_contents($f);
	file_put_contents($f, $content . $fileContents);
	
	echo "Done $f<br>";
}
?>