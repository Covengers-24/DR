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


// 글 삭제 버튼 클릭 시 동작
document.getElementById('deleteButton').addEventListener('click', function(event) {
  event.preventDefault(); // 기본 동작(페이지 이동)을 막습니다.
  
  // 삭제 확인 alert 창을 띄움
  // alert("정말로 삭제하시겠습니까?");
  
  // 사용자가 확인을 눌렀을 경우에만 삭제 동작 수행
  if (confirm("정말로 삭제를 하시겠습니까?")) {
    // 삭제 완료 후 게시글 목록으로 이동
    window.location.href = "./../board/honeyBoardList.html";
  } else {
    // 사용자가 취소를 누른 경우
    alert("삭제가 취소되었습니다.");
  }
});

document.getElementById('deleteButtons').addEventListener('click', function(event) {
  event.preventDefault(); // 기본 동작(페이지 이동)을 막습니다.
  
  // 삭제 확인 alert 창을 띄움
  // alert("정말로 삭제하시겠습니까?");
  
  // 사용자가 확인을 눌렀을 경우에만 삭제 동작 수행
  if (confirm("정말로 삭제를 하시겠습니까?")) {
    // 삭제 완료 후 게시글 목록으로 이동
    window.location.href = "./../board/honeyBoardList.html";
  } else {
    // 사용자가 취소를 누른 경우
    alert("삭제가 취소되었습니다.");
  }
});
