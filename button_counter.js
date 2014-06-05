var counter = document.getElementById('counter');
var button = document.getElementById('count_but');

var count = 0;
var number = 0;
button.onclick = function() {
  counter.innerHTML = number++;
};
