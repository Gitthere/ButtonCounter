var counter = document.getElementById('counter');
var button = document.getElementById('count_but');

var count = 0;
var number = 0;

//FIRST OPTION TO CHANGE COUNTER IN DOM
//use of data attribute to try to
//get data-count to change, not working
var div = document.getElementById('div');
  data = counter.innerHTML;
  //div.data("count");

button.onclick = function() {
//   SECOND OPTION
//   var data = ("data-count").text();
//   ("data-count").replaceWith("<div data-count='number'/>");
//   ("data-count").val(data);
// })

  counter.innerHTML = ++number;
  console.log(counter);
};

