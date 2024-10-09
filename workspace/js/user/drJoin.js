// 비밀번호 토글 기능 추가
document.getElementById('passwordToggle').addEventListener('click', function () {
  const passwordInput = document.getElementById('password');
  const passwordToggleIcon = document.getElementById('passwordToggle');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text'; // 비밀번호 보이기
    passwordToggleIcon.src = '/image/view.png'; // 아이콘 변경
  } else {
    passwordInput.type = 'password'; // 비밀번호 숨기기
    passwordToggleIcon.src = '/image/noview.png'; // 아이콘 변경
  }
});

document.getElementById('confirmPasswordToggle').addEventListener('click', function () {
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const confirmPasswordToggleIcon = document.getElementById('confirmPasswordToggle');

  if (confirmPasswordInput.type === 'password') {
    confirmPasswordInput.type = 'text'; // 비밀번호 보이기
    confirmPasswordToggleIcon.src = '/image/view.png'; // 아이콘 변경
  } else {
    confirmPasswordInput.type = 'password'; // 비밀번호 숨기기
    confirmPasswordToggleIcon.src = '/image/noview.png'; // 아이콘 변경
  }
});

$(document).ready(function() {
  // 전체 동의 체크박스 클릭 시 나머지 체크박스 모두 체크 또는 해제
  $('#checkAll').on('change', function() {
    var isChecked = $(this).is(':checked');
    $('.drjoin-checkboxInput').not('#checkAll').prop('checked', isChecked);
  });

  // 개별 체크박스 상태 변경 시 전체 동의 체크박스 상태도 변경
  $('.drjoin-checkboxInput').not('#checkAll').on('change', function() {
    var allChecked = $('.drjoin-checkboxInput').not('#checkAll').length === $('.drjoin-checkboxInput:checked').not('#checkAll').length;
    $('#checkAll').prop('checked', allChecked);
  });
});