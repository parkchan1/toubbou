$(function(){
  $('.tab_menu >li').on("click", function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.tab_menu li').removeClass('current');
		$('.tab_contents').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');

  });

});


const tabMenu = document.querySelectorAll('.tab_menu li')
const highLight = document.querySelector('.highlight')

tabMenu.forEach(function(item){
  item.addEventListener('click', function(event){
    //console.log(this.offsetLeft, this.offsetWidth);

    highLight.style.left = this.offsetLeft + 'px';
    highLight.style.width = this.offsetWidth + 'px';
    //숨김에 값 넣기
      $('#hide_type').val(this.innerText);
      $('#type').val(this.innerText);
      call_lists();
      });
  });  

  $(function() {
    $(".grid_1_btn").on("click", function() {
        $(this).parents().siblings("#exhibition_list").children(".tab_contents").find('.exhibition_contents_list li').addClass("grid_1");
        $(this).parents().siblings("#exhibition_list").children(".tab_contents").find('.exhibition_contents_list li').removeClass("grid_2 , grid_3");
        $(this).addClass("grid_on")
        $(this).siblings().removeClass("grid_on")
    });

    $(".grid_2_btn").on("click", function() {
        $(this).parents().siblings("#exhibition_list").children(".tab_contents").find('.exhibition_contents_list li').removeClass("grid_1 , grid_3");
    });

    $(".grid_3_btn").on("click", function() {
        $(this).parents().siblings("#exhibition_list").children(".tab_contents").find('.exhibition_contents_list li').addClass("grid_3");
        $(this).parents().siblings("#exhibition_list").children(".tab_contents").find('.exhibition_contents_list li').removeClass("grid_1");
    });
    $(".grid_btn li").click(function(){
        $(this).addClass("grid_on");
        $(this).siblings().removeClass("grid_on")
    });
});

  
  document.getElementById("go-back").addEventListener("click", () => {
    history.back();
  });
