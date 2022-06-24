//===> VALUE EXAMPLE <===//

$(document).ready(function () {
  $("#form_value").submit(function () {
    var nameValue = $("#name_id").val(); // now this can be get input value
    var classData = $("#class_id").val();
    var countryValue = $("#country_id").val();
    alert(
      `Your name : ${nameValue},
       your class : ${classData},
       your country :${countryValue}`
    );
  });
});
