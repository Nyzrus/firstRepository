firstRepository
===============
<?php $xmlURLSForWeather = array(
	"http://w1.weather.gov/xml/current_obs/KBOS.xml" => "Boston",
	"http://w1.weather.gov/xml/current_obs/KJFK.xml" => "New York"
	);
$rssURLSForNews = array(
	"http://rss.cnn.com/rss/cnn_topstories.rss" => "CNN",
	"http://www.nytimes.com/services/xml/rss/nyt/InternationalHome.xml" => "NY Times"
	);
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8"/>
	<title>XML and RSS Feeds</title>
	<h1>My Morning Rundown</h1>
	<style>
div.news
		{
			overflow: auto;
			width: 1000px;
			height: 300px;
			border: 3px groove blue;
			vertical-align: middle;
		}
</style>
</head>
<body>
	<?php 
		displayform($xmlURLSForWeather);
		displaynews($rssURLSForNews);
?>
</body>
</html>

<?php
function displayform($urls){
?>
<fieldset><legend>My Weather</legend>
<form method="get">
<label>Select city:</label><br>
<select name="weather">
<?php
	foreach($urls as $key=>$value) {
		if (isset($_GET['weather']) && $key == $_GET['weather']) 
			$selected = 'selected'; else $selected = '';
		echo "<option value=\"$key\" $selected>$value</option>\n";
	}
?>
</select>
<br>
<br>
<input value="Get the weather" name="formsubmitted" type="submit">
</form>
<?php
		if (isset($_GET['weather']))
			handleform($_GET['weather']);
?>
</fieldset>
<?php
}

function handleform($url){
		$xml = new SimpleXMLElement(file_get_contents($url));
		$location = $xml->location;
		echo "<center><b>$location</b><br>";
		echo "Wind is coming $xml->wind_string<br>";
		echo "The temperature is $xml->temperature_string";
		echo "</center>";
}


function displaynews($urls){
?>
<fieldset><legend>My Morning News</legend>
<form method="get">
<label>Select News Source:</label><br>
<select name="news">
<?php
	foreach($urls as $key=>$value) {
		if (isset($_GET['news']) && $key == $_GET['news']) 
			$selected = 'selected'; else $selected = '';
		echo "<option value=\"$key\" $selected>$value</option>\n";
	}
?>
</select>
<br>
<br>
<input value="Get the news" name="formsubmitted" type="submit">
</form>
<?php
		if (isset($_GET['news']))
			handleotherform($_GET['news']);
?>
</fieldset>
<?php
}

function handleotherform($url){
?>
<div class="news">
<?php
		$rss = new SimpleXMLElement(file_get_contents($url));
		$title = $rss->channel->title;
		echo "<h1>$title</h1>";
		
		foreach ($rss->channel->item as $item) {
			$items = $rss->channel->item;
			}
		foreach ($items as $item) {
			echo "<h2>$item->title<h2>\n";
			echo '<a href="' . $item->link . '">' . $item->title . '</a><br>';
			echo $item->description . "<br><br>\n";
			echo "<hr>";
		}
?>
</div>	
<?php	
}
?>




Test Repository
