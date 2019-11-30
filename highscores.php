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
    <script>
    var scores = [];
    var score = getCookie("score");
    scores.push(score);
    console.log(scores);
    </script>
    <hr>
    <a href="index.html">Back home</a>
    <footer>
      <em>&copy; 2019 Jacob Alfahad</em><br>
      <p><b>Please note:</b> Your scores are saved on this page if you select to save and share your score. After approximately 100 entries, the oldest 25 will be removed from the page (to allow space for other entries).</p>
    </footer>
  </body>
</html>
