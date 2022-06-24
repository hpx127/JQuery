$(document).ready(function () {
  //===> ADD-CLASS <====//
  $("#add_id").click(function () {
    //kaya tag par set karvano 6e te tag ni id and class je add karvano 6e
    $("#box").addClass("first");
    // NOTE : WHEN WE USE TWO CLASS AT ADD IN TAG ALAWAYS PRIORITY TO SECOND CLASS
    // syntax: $("#box").addClass("first second");

    //when you add more selector its possible on add more
    //$("#box,h1").addClass("second");
  });

  //====> REMOVE-CLASS <=====//
  $("#remove_id").click(function () {
    $("#box").removeClass("first");
  });

  //====> TOGGLE-CLASS <=====//
  $("#toggle_id").click(function () {
    //how work toggle when jo class lageli hase to remove kari dese ane nahi lageli hase to add kari dese
    //when click seconed time they can remove this class
    $("#box").toggleClass("second");
  });
});
