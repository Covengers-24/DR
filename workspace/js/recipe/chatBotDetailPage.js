const heartImage = document.getElementById('heartImage');
  
heartImage.addEventListener('click', function() {
  if (heartImage.src.includes('heartGray.png')) {
    heartImage.src = './../../image/heartColor.png'; // 빨간 하트 이미지 경로
  } else {
    heartImage.src = './../../image/heartGray.png'; // 검정 하트 이미지 경로
  }
});

document.getElementById('deleteButton').addEventListener('click', function () {
  // 삭제 확인창 띄우기
  if (confirm("정말로 삭제하시겠습니까?")) {
    // 확인을 누르면 삭제 완료 알림
    alert("삭제완료되었습니다.");
    // 여기에서 실제 삭제 처리가 필요한 경우, 추가 코드를 작성합니다.
  } else {
    // 취소를 누르면 아무 동작 없이 원래 페이지로 유지
    return;
  }
});

document.getElementById('deleteButtons').addEventListener('click', function () {
  // 삭제 확인창 띄우기
  if (confirm("정말로 삭제하시겠습니까?")) {
    // 확인을 누르면 삭제 완료 알림
    alert("삭제완료되었습니다.");
    // 여기에서 실제 삭제 처리가 필요한 경우, 추가 코드를 작성합니다.
  } else {
    // 취소를 누르면 아무 동작 없이 원래 페이지로 유지
    return;
  }
});