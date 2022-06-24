$(document).ready(function () {
  //''focus'' on input box
  $("#nameData,#classData,#countryData").focus(function () {
    $(this).css("background-color", "yellow");
  });

  //''blur'' on input box uper no color remove karva mate
  $("#nameData,#classData,#countryData").blur(function () {
    $(this).css("background-color", ""); //value null color null
  });

  //''change'' karva mate but aa SELECT BOX sathe j lage
  $("#countryData").change(function () {
    $(this).css("background-color", "orange");
  });

  //select box ma value choose kari ne div ma value add karishu
  $("#countryData").change(function () {
    var a = $(this).val(); // ama country value avi jase this na throw
    $("#dataGet").html(a);
  });

  //''select'' je input box sathe j chale
  $("#nameData,#classData").select(function () {
    $(this).css("background-color", "red");
  });

  //''submit''
  $("#formData").submit(function () {
    alert("form submited..");
  });
});
