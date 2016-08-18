function goRight(object, speed) {
  $(object).animate({
    left: "+=100%"
  }, speed);
}

        
$("#button").click(function() {
  goRight('.animate0', 1000)
  goRight('.animate1', 2000);
  goRight('.animate2', 3000);
  goRight('.animate3', 4000);
});