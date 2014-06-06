(function(){

var button = document.getElementById('count_but');
var number = 0;

  button.onclick = function() {
    //increases count by 1 for every click
    counter.innerHTML = ++number;

    //MANIPULATE DATA-COUNT IN DOM
    counter.setAttribute('data-count', number);

    //SET CLASS SIZE IN DOM
    counter.setAttribute('class', 'size' + number);

    //OUTPUT TO CONSOLE
    console.log(counter);
  }
})();

