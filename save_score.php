<?php
$file = 'highscores.html';
// Open the file to get existing content
$current = file_get_contents($file);
// Append a new person to the file
$current .= "<li><b>" . $_COOKIE["user"] . " : " . $_COOKIE["score"] . "</b> @ " . $_COOKIE["time"] . "</li>\n";
// Write the contents back to the file
file_put_contents($file, $current);
header('Location: http://localhost:8888/fighter/highscores.php');
?>
