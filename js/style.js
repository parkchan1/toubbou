

//   $(window).scroll(function() {
//     if ($(this).scrollTop() > 500) {
//       $('#header_wrap').addClass('header-scrolled');
//     $('nav').fadeOut(0);
//     $('.none').fadeIn(0);
//     } 
//     else {
//       $('#header_wrap').removeClass('header-scrolled');
//     $('nav').fadeIn(0);
//     $('.none').fadeOut(0);
//     }
//   })



const header = document.querySelector('header');

fetch('../header.html')
.then(res => res.text())
.then(data => header.innerHTML = data);

function modalOpen()
{
    $('#search_modal').show();
};
function modalClose()
{
    $('#search_modal').hide();
};


 $(function(){
	$('.pc_nav> li, .header_tool >li ').mouseover(function(){
		$(this).children('.pc_nav_sub').stop().slideDown();
	});
	$('.pc_nav> li, .header_tool >li').mouseleave(function(){
		$(this).children('.pc_nav_sub').stop().slideUp();
	});
});




$(function(){
  $("#button1").click(function(){
          $(".place_now1").fadeIn();
          $(".place_now2").fadeOut();
          $(".place_now3").fadeOut();
  });	
  $("#button2").click(function(){
          $(".place_now1").fadeOut();
          $(".place_now2").fadeIn();
          $(".place_now3").fadeOut();
  });
  $("#button3").click(function(){
          $(".place_now1").fadeOut();
          $(".place_now2").fadeOut();
          $(".place_now3").fadeIn();
  });

});


// m-nav
$(document).ready(function(){
 
  $('.m-menu_btn').on('click', function(){
      $('.m-menu_bg').show();
      $('.sidebar_menu').show().animate({
          left:0
      });  
      $('html, body').addClass('hidden');
  });

  $('.close_btn').on('click', function(){
      $('.m-menu_bg').hide(); 
      $('.sidebar_menu').animate({
          left: '-' + 80 + '%'
                  },function(){
                      $('.sidebar_menu').hide();          
                  });
      $('html, body').removeClass('hidden')  
  });
  document.querySelector('.m-menu_bg').addEventListener('click', function(e){
      document.querySelector(".close_btn").click();
  });             


});
