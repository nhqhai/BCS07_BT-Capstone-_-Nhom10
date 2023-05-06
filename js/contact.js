
document.getElementById("switchButton").onclick = function () {
   
    document.getElementById("myBody").classList.toggle("dark");
  };
  
  var btn = $('#goToTop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



