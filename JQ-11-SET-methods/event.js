$(document).ready(function () {
  $("#click_btn").click(function () {
    //change text box --> set box
    $("#box h2").text("Set Box");

    //html method use
    $("#box p").html("hell pragraph <b>my value change</b> now......");

    //class method set on tag
    $("#box h1").attr("class", "blue"); //and now set value for which class
  });
});
