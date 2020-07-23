$(document).ready(function() {

  // rotate the gradient on the background every 1/10 of a second
  setInterval(function(){ 
    let $color = $("#wrapper").css("background-image");
    let angle = parseInt($color.split(",")[0].split("(")[1].split("deg")[0]);
    if (angle == 179) {
      // skip 180 degrees
      angle = 181;
    } else if (angle == 360) {
      // reset if at 360 degrees
      angle = 0;
    } else {
      angle += 1;
    }
    // reapply the gradient
    $("#wrapper").css("background-image", "linear-gradient(" + angle + "deg, #f8b133, #0651d8)");
  }, 100);

});