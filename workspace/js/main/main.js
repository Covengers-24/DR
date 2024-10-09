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

// 소수점 반올림 함수
function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

// 계산 함수
function convert() {
  var qnt_kg = document.getElementById("qnt").value;
  
  document.getElementById("portion").innerHTML = round(qnt_kg / 0.719, 1) + " 인분";
  document.getElementById("co2").innerHTML = round(qnt_kg * 1.7, 1) + " kgCO2eq.";
  document.getElementById("tree").innerHTML = round(qnt_kg / 4.87, 1) + " 그루";
  document.getElementById("energy").innerHTML = round(qnt_kg * 1.67, 1) + " kWh";
  document.getElementById("washingMachine").innerHTML = round(qnt_kg * 12, 1) + " 회";
  document.getElementById("transCost").innerHTML = round(qnt_kg * 182, 1) + " 원";
  document.getElementById("processCost").innerHTML = round(qnt_kg * 260000, 1) + " 원";
}

// 이벤트 리스너 추가
document.addEventListener("DOMContentLoaded", function() {
  // 무게 입력 필드에 입력할 때마다 convert 함수가 실행되도록 이벤트 리스너를 추가
  var inputField = document.getElementById("qnt");
  inputField.addEventListener("input", convert);
});