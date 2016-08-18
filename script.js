var pages = ['japanese.html', 'pizza.html', 'warcraft.html'];
var randomNumber = Math.floor(Math.random() * 10 + 1)
$(document).ready(function(){
  $('#middle').click(function() {
    console.log(randomNumber);
    window.location = "./" + pages[0];
  });
});
