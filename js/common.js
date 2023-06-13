// searchModal


const showSearch = () => {

  const _html = `
  
  <div id="search_modal" class="modal searchModal">
      <button class="search_modal_close" onclick="modalClose()"><img src="https://parkchan1.github.io/toubbou/icon/close_w.svg" alt="닫기"></button>
      <div class="search_modal_inner"></div>
      <form action="#" class="search_area">
          <input type="text" class="search_box">
          <button class="search_btn"><img src="https://parkchan1.github.io/toubbou/icon/search_btn.svg" alt="조회하기"></button>
      </form>
  
          <ul class="search_nav">
              <li>
                  <a href="https://parkchan1.github.io/toubbou/project/about.html">About</a>
                  <a href="https://parkchan1.github.io/toubbou/project/artists_list.html">Artists</a>
              </li>
              <li>
                  <a href="#">Event</a>
                  <a href="#">진행중인 이벤트</a>
                  <a href="#">진행예정 이벤트</a>
              </li>
              <li>
                  <a href="#">Art Shop</a>
              </li>
              <li>
                  <a href="#">Exhibition</a>
                  <a href="#">전시중</a>
                  <a href="#">전시예정</a>
              </li>
              <li>
                  <a href="#">Community</a>
                  <a href="#">Notice</a>
                  <a href="#">FAQ</a>
              </li>
              <li>
                  <a href="#">Cart</a>
              </li>
              <li>
                  <a href="#">Mypage</a>
                  <a href="https://parkchan1.github.io/toubbou/mypage/login.html">Login</a>
                  <a href="https://parkchan1.github.io/toubbou/mypage/join.html">Join</a>
              </li>
  
          </ul>
  
  
  
  </div>
  
  `
  
  const searchdom = new DOMParser().parseFromString(_html, 'text/html');
  const searchModal = searchdom.querySelector(".searchModal");
  document.body.appendChild(searchModal)
  
  searchModal.querySelector(".search_modal_close").addEventListener("click", () => {
      document.body.removeChild(searchModal)
  })
  
  };


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
