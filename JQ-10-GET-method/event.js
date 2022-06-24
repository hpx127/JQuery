$(document).ready(function () {
  //-----> TAG-VALUE <-----//

  //==> syntex : "  $('#id').html() "

  //how to html tag get method used...
  var htmlValue = $("#box").html(); //html value uthay vi
  //when you get whole body part write only $('body')
  console.log(htmlValue);
  //now box div inside target p tag value when get
  var tagValue = $("#box p").html();
  console.log(tagValue);

  //------> TEXT - VALUE <-----//
  //text value only get tag inside value not tag only text
  //===> syntax : " $('#id').text()"
  var textValue = $("#box").text(); //html value uthay vi
  //when you get whole body part write only $('body')
  console.log(textValue);

  // ------> ATTRIBUTE -VALUE <----//
  //have mare id parathi mara tag ma kaya kaya attribute means ke class chhe te jova mate attribute used thai
  //===> syntax : " $('#box').attr()"
  var attrValue = $("#box").attr("class"); //note: ANE MARE SANE VALUE JOVANI TE KHAS APVANU AHIYA CLASS NO JOVANA TO
  console.log(attrValue);

  // -----> VALUE EXAMPLE ANOTHER FILE INDEX-2 <----//
});
