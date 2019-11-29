<?php
echo 'Saving...';
$file = 'highscores.html';
// Open the file to get existing content
$current = file_get_contents($file);
// Append a new person to the file
$current .= "<li>" . $_COOKIE["score"] . "</li>";
// Write the contents back to the file
file_put_contents($file, $current);
echo 'Score saved.';
header('Location: http://hircinus.github.io/fighter/highscores.php');
?>
