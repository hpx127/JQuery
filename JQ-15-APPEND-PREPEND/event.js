$(document).ready(function () {
  //====> APPEND-BUTTON <====//
  $("#append_btn").click(function () {
    $("#box").append("<h2>This is APPEND</h2>");
  });

  //======> PREPEND-BUTTON <====//
  $("#prepend_btn").click(function () {
    $("#box").prepend("<h2>This is PREPEND</h2>");
  });
});
