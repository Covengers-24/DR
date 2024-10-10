// report.js

// DOMContentLoaded 이벤트를 사용하여 DOM이 완전히 로드된 후에 실행
document.addEventListener("DOMContentLoaded", function() {
    // 신고 버튼 요소 선택
    const reportButton = document.querySelector('.right-button');

    // 클릭 이벤트 리스너 추가
    reportButton.addEventListener('click', function() {
        // alert 창 표시
        const confirmation = confirm("정말로 신고하시겠습니까?");
        if (confirmation) {
            // 신고 처리 로직을 여기에 추가
            alert("신고가 접수되었습니다."); // 확인 메시지
        } else {
            alert("신고가 취소되었습니다."); // 취소 메시지
        }
    });
});
