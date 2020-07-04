$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#cat-showing").toggle();
    $("#cat-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".clickable2").click(function() {
    $("#iguana-showing").fadeOut();
    $("#iguana-hidden").fadeIn();
  });
});

$(document).ready(function() {
  $(".clickable3").click(function() {
    $("#squirrel-showing").toggle();
    $("#squirrel-hidden").toggle();
  });
});