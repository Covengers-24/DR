// 모든 '찜 삭제' 버튼에 대해 이벤트 리스너 추가
document.addEventListener("DOMContentLoaded", function() {
    // DOM이 완전히 로드된 후 실행되는 코드 블록

    // 모든 찜 삭제 버튼을 선택
    const deleteButtons = document.querySelectorAll(".myPage-pictureListDelete");

    // 각 버튼에 클릭 이벤트 추가
    deleteButtons.forEach(function(button) {
        // 버튼 클릭 시 실행되는 이벤트 리스너 추가
        button.addEventListener("click", function() {
            // 삭제 확인을 위한 확인 창 표시
            const result = confirm("찜 삭제하시겠습니까?");
            if (result) { // 사용자가 "확인"을 클릭한 경우
                alert("삭제되었습니다."); // 삭제 완료 알림 표시
            } else { // 사용자가 "취소"를 클릭한 경우
                alert("삭제가 취소되었습니다."); // 삭제 취소 알림 표시
            }
        });
    });
});