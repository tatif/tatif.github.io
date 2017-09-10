/* dropdown menu*/

$(document).ready(function () {
  $(".dropdown-toggle").on("click", function () {
    $(this).toggleClass("active");
  });
});

/* carousel */

 $(".start-slide").click(function(){
    $("#myCarousel").carousel('cycle');
  });

  // Осуществляет переход на 0 слайд карусели 
  $(".slide-one").click(function(){
    $("#myCarousel").carousel(0);
  });

  // Осуществляет переход на 1 слайд карусели 
  $(".slide-two").click(function(){
    $("#myCarousel").carousel(1);
  });

  // Осуществляет переход на 2 слайд карусели 
  $(".slide-three").click(function(){
    $("#myCarousel").carousel(2);
  });

