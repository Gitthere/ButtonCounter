var counter = document.getElementById('counter');
var button = document.getElementById('count_but');

var count = 0;
var number = 0;

data = counter.innerHTML;

button.onclick = function() {
  //increases count by 1 for every click
  counter.innerHTML = ++number;

  //MANIPULATE DATA-COUNT IN DOM
  var newdata = document.getElementById('data-count');
  counter.setAttribute('data-count', number);

  //OUTPUT TO CONSOLE
  console.log(counter);
};

