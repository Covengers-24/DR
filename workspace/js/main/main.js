$(document).ready(function() {
  function setupMenuToggle(menuId, listClass) {
    // 메뉴 클릭 시 하위 메뉴 토글
    $(menuId).on('click', function(event) {
      // 다른 모든 하위 메뉴 닫기
      $('.main-recipeList, .main-boardList, .main-myPageList').not(listClass).slideUp();

      // 현재 하위 메뉴 토글
      $(listClass).slideToggle();

      event.stopPropagation(); // 클릭 이벤트 전파 방지
    });
  }

  // 각 메뉴에 대해 함수 호출
  setupMenuToggle('#main-recipe', '.main-recipeList');
  setupMenuToggle('#main-board', '.main-boardList');
  setupMenuToggle('#main-myPage', '.main-myPageList');

  // 다른 곳 클릭 시 모든 하위 메뉴 닫기
  $(document).on('click', function() {
    $('.main-recipeList, .main-boardList, .main-myPageList').slideUp(); // 모든 하위 메뉴 닫기
  });
});