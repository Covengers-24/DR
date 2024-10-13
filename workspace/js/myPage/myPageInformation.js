// --------사진 이미지 업로드 ------- //  
// 수레바퀴 이미지를 클릭하면 파일 업로드 창이 열림
document.getElementById('uploadIcon').addEventListener('click', function() {
    // 숨겨진 input 요소를 클릭하여 파일 선택 창을 염
    document.getElementById('imageUpload').click();
});

// 파일이 선택되면 이미지를 변경하는 함수
document.getElementById('imageUpload').addEventListener('change', function(event) {
    // 선택한 파일을 가져옴
    const file = event.target.files[0];
    if (file) { // 파일이 선택된 경우
        const reader = new FileReader(); // FileReader 객체 생성
        reader.onload = function(e) {
            // 미리 보기 이미지 업데이트
            document.getElementById('profileImage').src = e.target.result;
        };
        // 선택한 파일을 Data URL 형식으로 읽음
        reader.readAsDataURL(file);
    }
});

// ------ 수정 완료 alert 창 ----- //
document.getElementById('completeWriteBtn').addEventListener('click', function() {
    // 수정 완료 여부를 확인하는 확인 창 표시
    if (confirm('정말 수정하시겠습니까?')) {
        // 수정 완료 알림 표시
        alert('수정이 완료되었습니다');
    }
});