// Player variables
var name_holder = document.getElementById("name_holder");
var health_pts = 100;
var energy_pts = 100;
var health = document.getElementById("health");
var energy = document.getElementById("energy");
var score = 0;
var scoreboard = document.getElementById("score");

// Game log and controller variables
var log = document.getElementById("log");
var sword_button = document.getElementById("sword_button");
var shield_button = document.getElementById("shield_button");
var blaster_button = document.getElementById("blaster_button");
var heal_button = document.getElementById("heal_button");

// Enemy variables
var lvl = Math.floor(Math.random() * 10) + 1;
var lvl_holder = document.getElementById("lvl");
var enemy_health_pts = 10 * lvl;
var enemy_health = document.getElementById("enemy_health");
var enemy_attack_range = document.getElementById("enemy_attack_range");

// Initializes game with custom username and initial health and energy
function initialize() {
  var user = prompt("What's your name?", "Fighter");
  while (user.length >= 25) {
    user = prompt("What's your name?\nPlease use less than 25 characters.", "Person");
  }
  if (user != null || user != "") {
    name_holder.innerHTML = user;
  }
  else {
    name_holder.innerHTML = "Person";
  }
  health.innerHTML = health_pts;
  health.style.background = "rgb(255,0,0," + health_pts/100 + ")";
  if (health_pts >= 60) {
    health.style.color = "white";
  }
  else {
    health.style.color = "black";
  }
  energy.innerHTML = energy_pts;
  energy.style.background = "rgb(0,0,255," + energy_pts/100 + ")";
  if (energy_pts >= 60) {
    energy.style.color = "white";
  }
  else {
    energy.style.color = "black";
  }
  enemy_health.innerHTML = enemy_health_pts;
  enemy_attack_range.innerHTML = "[" + lvl + ", " + (lvl + 25) + "]";
  lvl_holder.innerHTML = lvl;
  scoreboard.innerHTML = score;
}

// Executes sword action
function sword() {
  if (energy_pts < 10) {
    alert("You don't have enough energy to do this.");
    return;
  }
  var ai_attack = Math.random();
  if (ai_attack > 0.4) {
    var player_dmg = Math.floor(Math.random() * 25) + 1 + (lvl - 1);
    health_pts -= player_dmg;
  }
  else {
    var player_dmg = 0;
  }
  enemy_health_pts -= 20;
  energy_pts -= 10;
  // CLEAR
  health.innerHTML = health_pts;
  health.style.background = "rgb(255,0,0," + health_pts/100 + ")";
  if (health_pts >= 60) {
    health.style.color = "white";
  }
  else {
    health.style.color = "black";
  }
  energy.innerHTML = energy_pts;
  energy.style.background = "rgb(0,0,255," + energy_pts/100 + ")";
  if (energy_pts >= 60) {
    energy.style.color = "white";
  }
  else {
    energy.style.color = "black";
  }
  enemy_health.innerHTML = enemy_health_pts;
  log.innerHTML += "<li>Player used Sword : lost " + player_dmg + " health ; lost 10 energy ; dealt 20 damage.</li>";
}

// Executes shield action
function shield() {
  if (energy_pts > 95) {
    alert("You cannot add any more energy.");
    return;
  }
  var ai_attack = Math.random();
  if (ai_attack > 0.4) {
    var player_dmg = Math.floor(((Math.random() * 25) + 1 + (lvl - 1)) / 4);
    health_pts -= player_dmg;
  }
  else {
    var player_dmg = 0;
  }
  energy_pts += 5;
  // CLEAR
  health.innerHTML = health_pts;
  health.style.background = "rgb(255,0,0," + health_pts/100 + ")";
  if (health_pts >= 60) {
    health.style.color = "white";
  }
  else {
    health.style.color = "black";
  }
  energy.innerHTML = energy_pts;
  energy.style.background = "rgb(0,0,255," + energy_pts/100 + ")";
  if (energy_pts >= 60) {
    energy.style.color = "white";
  }
  else {
    energy.style.color = "black";
  }
  log.innerHTML += "<li>Player used Shield : lost " + player_dmg + " health ; gained 10 energy ; dealt 0 damage.</li>";
}

// Executes blaster action
function blaster() {
  if (energy_pts < 30) {
    alert("You don't have enough energy to do this.");
    return;
  }
  var ai_attack = Math.random();
  if (ai_attack > 0.6) {
    var player_dmg = Math.floor(((Math.random() * 25) + 1 + (lvl - 1)) / 2);
    health_pts -= player_dmg;
  }
  else {
    var player_dmg = 0;
  }
  enemy_health_pts -= 25;
  energy_pts -= 30;
  // CLEAR
  health.innerHTML = health_pts;
  health.style.background = "rgb(255,0,0," + health_pts/100 + ")";
  if (health_pts >= 60) {
    health.style.color = "white";
  }
  else {
    health.style.color = "black";
  }
  energy.innerHTML = energy_pts;
  energy.style.background = "rgb(0,0,255," + energy_pts/100 + ")";
  if (energy_pts >= 60) {
    energy.style.color = "white";
  }
  else {
    energy.style.color = "black";
  }
  enemy_health.innerHTML = enemy_health_pts;
  log.innerHTML += "<li>Player used Blaster : lost " + player_dmg + " health ; lost 30 energy ; dealt 25 damage.</li>";
}

// Executes heal action
function heal() {
  if (energy_pts < 10) {
    alert("You don't have enough energy to do this.");
    return;
  }
  if (health_pts > 95) {
    alert("You cannot heal any more.");
    return;
  }
  health_pts += 5;
  energy_pts -= 10;
  // CLEAR
  health.innerHTML = health_pts;
  health.style.background = "rgb(255,0,0," + health_pts/100 + ")";
  if (health_pts >= 60) {
    health.style.color = "white";
  }
  else {
    health.style.color = "black";
  }
  energy.innerHTML = energy_pts;
  energy.style.background = "rgb(0,0,255," + energy_pts/100 + ")";
  if (energy_pts >= 60) {
    energy.style.color = "white";
  }
  else {
    energy.style.color = "black";
  }
  log.innerHTML += "<li>Player used Heal : gained 5 health ; lost 10 energy ; dealt 0 damage.</li>";
}

// Checks enemy health and player health and acts accordingly
function check() {
  if (enemy_health_pts <= 0) {
    score += lvl;
    scoreboard.innerHTML = score;
    log.innerHTML += "<li><b>Player defeated lvl. " + lvl + " enemy : score + " + lvl + ".</b></li>";
    lvl = Math.floor(Math.random() * 10) + 1;
    lvl_holder.innerHTML = lvl;
    enemy_health_pts = 10 * lvl;
    enemy_health.innerHTML = enemy_health_pts;
    enemy_attack_range.innerHTML = "[" + lvl + ", " + (lvl + 25) + "]";
    if (health_pts <= 60) {
      health_pts += 40;
    }
    else {
      health_pts = 100;
    }
    if (energy_pts <= 80) {
      energy_pts += 20;
    }
    else {
      energy_pts = 100;
    }
    health.innerHTML = health_pts;
    health.style.background = "rgb(255,0,0," + health_pts/100 + ")";
    if (health_pts >= 60) {
      health.style.color = "white";
    }
    else {
      health.style.color = "black";
    }
    energy.innerHTML = energy_pts;
    energy.style.background = "rgb(0,0,255," + energy_pts/100 + ")";
    if (energy_pts >= 60) {
      energy.style.color = "white";
    }
    else {
      energy.style.color = "black";
    }
  }
  if (health_pts <= 0) {
    var confirm_download = confirm("Would you like to download your results?");
    log.innerHTML += "<li><b>Player killed by lvl. " + lvl + " enemy (score: " + score + ").</b></li>";
    alert("You died from a lvl. " + lvl + " enemy.\nYour score was " + score + ". Good luck next time!");

    if (confirm_download == true) {
      var hiddenElement = document.createElement('a');
      var date = new Date();
      hiddenElement.href = 'data:attachment/text,' + encodeURI("<!DOCTYPE html><html><head><title>Score for " + date + "</title></head><body><h1>Score for " + date + "</h1><ol>" + log.innerHTML + "</ol><br><em><a href='https://hircinus.github.io/fighter/'>Simple fighting game</a> by Jacob Alfahad, 2019</em></body></html>");
      hiddenElement.target = '_blank';
      hiddenElement.download = 'score-' + date + '.html';
      hiddenElement.click();
    }

    location.reload();
  }
  else {}
}

// Checks if keys [1,2,3,4] are pressed
document.onkeydown = checkKey;
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '49') {
        // 1
        sword();
        sword_button.focus ();
        check();
        return;
    }
    else if (e.keyCode == '50') {
        // 2
        shield();
        shield_button.focus ();
        check();
        return;
    }
    else if (e.keyCode == '51') {
       // 3
       blaster();
       blaster_button.focus ();
       check();
       return;
    }
    else if (e.keyCode == '52') {
       // 4
       heal();
       heal_button.focus ();
       check();
       return;
    }

}
