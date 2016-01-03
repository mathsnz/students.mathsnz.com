<?php

$dir    = './questions';
$files = scandir($dir);
$types = array();
$output='';
foreach ($files as $file){
	if(substr($file,-2)=="js"){
		$contents = file_get_contents($dir.'/'.$file);
		$contents = explode('|',$contents);
		if(!array_key_exists($contents[1],$types)){
			$types[$contents[1]]=array();
		}
		$types[$contents[1]][$contents[3]]=$file;
	}
}
foreach ($types as $type => $questions){
	$output .= "<div><span class=type>$type</span><select class=addselect>
";
	foreach ($questions as $question => $script){
		$output .= "<option value=".substr($script,0,-3).">$question</option>
";
	} 
	$output .= "</select> <div class=addquestion>Add</div></div>
";
	$output .= "
";
}

$file = 'allquestions.html';
file_put_contents($file, $output);

echo "Done!";

?>