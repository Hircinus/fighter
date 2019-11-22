var name_holder = document.getElementById("name_holder");
var health_pts = 100;
var energy_pts = 100;
var health = document.getElementById("health");
var energy = document.getElementById("energy");

var lvl = Math.floor(Math.random() * 10) + 1;
var lvl_holder = document.getElementById("lvl");
var enemy_health_pts = 10 * lvl;
var enemy_health = document.getElementById("enemy_health");

function initialize() {
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
  energy.innerHTML = energy_pts;
  enemy_health.innerHTML = enemy_health_pts;
  lvl_holder.innerHTML = lvl;
}

function sword() {
  if (energy_pts <= 0) {
    alert("You don't have enough energy to do this.");
  }
  var ai_attack = Math.random();
  if (ai_attack > 0.4) {
    var player_dmg = (Math.floor(Math.random() * 5) + 1) * lvl;
    health_pts -= player_dmg;
  }
  enemy_health_pts -= 20;
  energy_pts -= 10;
  // CLEAR
  health.innerHTML = health_pts;
  energy.innerHTML = energy_pts;
  enemy_health.innerHTML = enemy_health_pts;
}

function check() {
  if (enemy_health_pts <= 0) {
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
    energy.innerHTML = energy_pts;
  }
  if (health_pts <= 0) {
    alert("You died.");
    location.reload();
  }
  else {}
}

function shield() {
  var ai_attack = Math.random();
  if (ai_attack > 0.4) {
    var player_dmg = ((Math.floor(Math.random() * 5) + 1) * lvl) / 4;
    health_pts -= player_dmg;
  }
  energy_pts += 5;
  // CLEAR
  health.innerHTML = health_pts;
  energy.innerHTML = energy_pts;
}

function blaster() {
  if (energy_pts <= 0) {
    alert("You don't have enough energy to do this.");
  }
  enemy_health_pts -= 30;
  energy_pts -= 20;
  // CLEAR
  energy.innerHTML = energy_pts;
  enemy_health.innerHTML = enemy_health_pts;
}

function heal() {
  if (energy_pts <= 0) {
    alert("You don't have enough energy to do this.");
  }
  health_pts += 5;
  energy_pts -= 10;
  // CLEAR
  health.innerHTML = health_pts;
  energy.innerHTML = energy_pts;
}
