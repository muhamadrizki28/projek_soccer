$(document).ready(function () {
  $('.menu-toggle').click(function () {
    $('nav ul').toggleClass('active');
    $(this).toggleClass('active');
  });
});
