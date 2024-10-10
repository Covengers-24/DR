 // 수레바퀴 이미지를 클릭하면 파일 업로드 창이 열림
 document.getElementById('uploadIcon').addEventListener('click', function() {
     document.getElementById('imageUpload').click(); // 숨겨진 input을 클릭함
 });

 // 파일이 선택되면 이미지를 변경하는 함수
 document.getElementById('imageUpload').addEventListener('change', function(event) {
     const file = event.target.files[0];
     if (file) {
         const reader = new FileReader();
         reader.onload = function(e) {
             document.getElementById('profileImage').src = e.target.result; // 미리 보기 이미지 업데이트
         };
         reader.readAsDataURL(file);
     }
 });