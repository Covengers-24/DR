$(document).ready(function() {
  // 인증요청 버튼 클릭 시 실행되는 함수
  $('#sendCode').on('click', function() {
    // 인증이 요청되었다는 알림창을 띄움
    alert('인증이 요청되었습니다');
  });
});

$(document).ready(function() {
  $('#sendCode').click(function() {
    const phoneInput = $('#phone').val();
    const phoneError = $('#phoneError');

    // 정규 표현식을 사용하여 입력값 검증
    const phonePattern = /^[0-9]{10,11}$/; // 10~11자리 숫자만 허용

    // 입력값이 형식에 맞지 않을 경우
    if (!phonePattern.test(phoneInput)) {
      phoneError.text("형식에 맞게 입력해주세요.");
    } else {
      phoneError.text(""); // 오류 메시지 초기화
      // 여기에 인증 요청을 위한 AJAX 호출 등을 추가할 수 있습니다.
    }
  });
});