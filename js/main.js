$(function () {
  // this will get the full URL at the address bar
  var url = window.location.href;

  // passes on every "li" tag
  $("nav li a").each(function () {
    // checks if its the same on the address bar
    if (url == (this.href)) {
      $(this).addClass("active");
      //for making parent of submenu active
      $(this).parent().parent().addClass("active");
    }
  });
});
