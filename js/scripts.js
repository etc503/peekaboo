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
    $("#iguana-showing").fadeIn();.toggle();
    $("#iguana-hidden").fadeOut();
  });
});
