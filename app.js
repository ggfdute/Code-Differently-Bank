$(document).ready(function(){
    $(".run").click(function(){
        $(".modal, .gradient-text").css("animation-play-state", "running");
    });
    $(".close").click(function(){
        $(".modal, .gradient-text").css("animation-play-state", "paused");
    });
});

var start = document.querySelector('.run');
start.onmouseover = function() {
  document.getElementById('check').style.display = 'block';
}
start.onmouseout = function() {
  document.getElementById('check').style.display = 'none';
}

var stop = document.querySelector('.close');
stop.onmouseover = function() {
  document.getElementById('X').style.display = 'block';
}
stop.onmouseout = function() {
  document.getElementById('X').style.display = 'none';
}