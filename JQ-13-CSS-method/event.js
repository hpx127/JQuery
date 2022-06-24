$(document).ready(function () {
  $("#style_btn").click(function () {
    //syntax:$("id").css("propareti name","propareti value")
    $("#box").css("background", "yellowgreen"); //set inline css
    //when input more inline style on one tag then
    //$("#box").css({ color: "white", background: "yellowgreen" });
  });
});
