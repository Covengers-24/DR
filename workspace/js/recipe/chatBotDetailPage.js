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


// 댓글 수정 버튼을 눌렀을 때 실행되는 함수
function editComment(commentId) {
  var commentText = document.getElementById('commentText' + commentId);
  var editInput = document.getElementById('editInput' + commentId);
  var editTextarea = document.getElementById('editTextarea' + commentId);
  var buttonGroup = document.getElementById('buttonGroup' + commentId); // 수정/삭제 버튼 그룹

  // 기존 댓글 텍스트를 textarea에 삽입
  editTextarea.value = commentText.innerText;

  // 댓글 텍스트를 숨기고 수정창을 보이게 함
  commentText.style.display = 'none';
  editInput.style.display = 'block';

  // 수정/삭제 버튼 숨김
  buttonGroup.style.display = 'none';
}

// 댓글 저장 버튼을 눌렀을 때 실행되는 함수
function saveComment(commentId) {
  var commentText = document.getElementById('commentText' + commentId);
  var editInput = document.getElementById('editInput' + commentId);
  var editTextarea = document.getElementById('editTextarea' + commentId);
  var buttonGroup = document.getElementById('buttonGroup' + commentId); // 수정/삭제 버튼 그룹

  // 수정된 내용을 댓글 텍스트에 적용
  commentText.innerText = editTextarea.value;

  // 수정창을 숨기고, 댓글 텍스트를 다시 보이게 함
  editInput.style.display = 'none';
  commentText.style.display = 'block';

  // 수정/삭제 버튼 다시 보이게 함
  buttonGroup.style.display = 'flex';
}

// 댓글 수정 취소 버튼을 눌렀을 때 실행되는 함수
function cancelEdit(commentId) {
  var commentText = document.getElementById('commentText' + commentId);
  var editInput = document.getElementById('editInput' + commentId);
  var buttonGroup = document.getElementById('buttonGroup' + commentId); // 수정/삭제 버튼 그룹

  // 수정창을 숨기고, 댓글 텍스트를 다시 보이게 함
  editInput.style.display = 'none';
  commentText.style.display = 'block';

  // 수정/삭제 버튼 다시 보이게 함
  buttonGroup.style.display = 'flex';
}