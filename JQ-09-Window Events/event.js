$(document).ready(function () {
  //scrolling function
  $(window).scroll(function () {
    console.log("you are scrolling windows");
  });

  $("#box").scroll(function () {
    console.log("you are scorlling div");
  });

  //re-size function
  $(window).resize(function () {
    console.log("you are resizing windows side");
  });
});
