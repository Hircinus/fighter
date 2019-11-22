// Player variables
var name_holder = document.getElementById("name_holder");
var health_pts = 100;
var energy_pts = 100;
var health = document.getElementById("health");
var energy = document.getElementById("energy");
var score = 0;
var scoreboard = document.getElementById("score");

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

// Initializes game with custom username and initial health and energy
function initialize() {
  alert("Thanks for checking out our game!\nRemember that your progress IS NOT saved.")
  var user = prompt("What's your name?", "Person");
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
    var player_dmg = (Math.floor(Math.random() * 5) + 1) * lvl;
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
    var player_dmg = Math.floor((((Math.random() * 5) + 1) * lvl) / 4);
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
    var player_dmg = Math.floor(((Math.random() * 5) + 1) * lvl) / 2;
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
    log.innerHTML += "<li>Player killed by lvl. " + lvl + " enemy.</li>";
    alert("You died from a lvl. " + lvl + " enemy.\nYour score was " + score + ". Good luck next time!");
    location.reload();
  }
  else {}
}

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
