$(document).ready(function () {
  //====> After-BUTTON <====//
  $("#after_btn").click(function () {
    $("#box").after("<h2>This is after</h2>");
  });

  //======> before-BUTTON <====//
  $("#before_btn").click(function () {
    $("#box").before("<h2>This is before</h2>");
  });
});
