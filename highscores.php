<!DOCTYPE html>
<html>
  <head>
    <title>Scores</title>
    <link href="style.css" rel="stylesheet" type="text/css">
  </head>
  <body>
    <nav>
      <a href="combat.html">Start game</a> | <a href="highscores.php">Scores</a> | <a href="help.html">[?] Help</a> | <a href="about.html">About</a>
    </nav>
    <h1>Saved scores</h1>
    <ol>
      <?php echo file_get_contents("highscores.html") ?>
    </ol>
    <hr>
    <a href="index.html">Back home</a>
    <footer><em>&copy; 2019 Jacob Alfahad</em></footer>
  </body>
</html>
