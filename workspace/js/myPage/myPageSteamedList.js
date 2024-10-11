 // 모든 '찜 삭제' 버튼에 대해 이벤트 리스너 추가
 document.addEventListener("DOMContentLoaded", function() {
     // 모든 찜 삭제 버튼을 선택
     const deleteButtons = document.querySelectorAll(".myPage-pictureListDelete");

     // 각 버튼에 클릭 이벤트 추가
     deleteButtons.forEach(function(button) {
         button.addEventListener("click", function() {
             const result = confirm("찜 삭제하시겠습니까?");
             if (result) {
                 alert("삭제되었습니다.");
             } else {
                 alert("삭제가 취소되었습니다.");
             }
         });
     });
 });