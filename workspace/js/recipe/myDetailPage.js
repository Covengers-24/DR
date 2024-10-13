const heartImage = document.getElementById('heartImage');
    
    heartImage.addEventListener('click', function() {
      if (heartImage.src.includes('heartGray.png')) {
        heartImage.src = './../../image/heartColor.png'; // 빨간 하트 이미지 경로
      } else {
        heartImage.src = './../../image/heartGray.png'; // 검정 하트 이미지 경로
      }
    });

    document.getElementById('deleteButton').addEventListener('click', function () {
      if (confirm("정말로 삭제하시겠습니까?")) {
        alert("삭제완료되었습니다.");
      } else {
        return;
      }
    });

    document.getElementById('deleteButtons').addEventListener('click', function () {
      if (confirm("정말로 삭제하시겠습니까?")) {
        alert("삭제완료되었습니다.");
      } else {
        return;
      }
    });

    function showEditComment() {
      var commentInput = document.getElementById("commentInput");
      if (commentInput.style.display === "none") {
        commentInput.style.display = "block";
      } else {
        commentInput.style.display = "none";
      }
    }

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