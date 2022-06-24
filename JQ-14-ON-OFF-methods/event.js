$(document).ready(function () {
  //inside use only single event
  $("#box").on("click", function () {
    //btn click thai 6e etle click and on inside define multiple event
    $("#box").css("background", "orange");
  });

  //use main purpose :
  $("#box").on({
    click: function () {
      //jena par fire karavnu 6e te tag ni id
      $("#box").css("background", "red");
    },
    mouseover: function () {
      $("#box").css("background", "green");
    },
    mouseout: function () {
      $("#box").css("background", "yellow");
    },
  });

  $("#remove_btn").click(function () {
    //off : event remove karva mate
    $("#box").off("mouseover mouseout");
  });
});
