// 1. id 와 비밀번호 값 존재 여부 확인
button.addEventListener("click", function () {
  event.preventDefault();
  let message = "";

  // 아이디가 비어있는지 확인
  if (id.value.trim() === "") {
    message += "아이디를 입력하세요. <br>";
  }

  // 비밀번호가 비어있는지 확인
  if (pw.value.trim() === "") {
    message += "비밀번호를 입력하세요.";
  }

  result.innerHTML = message;
  result.style.color = "red";

  if (message === "") {
    alert("@@@ 관리자님 환영합니다");
    window.location.href = "./../../html/manager/dashBoard.html"; // 페이지 이동
  }
});

// 2. 비밀번호 토글
const noView = document.querySelector(".manager-formTogle1");
const View = document.querySelector(".manager-formTogle2");

// '비밀번호 비이기' 버튼 클릭 시
noView.addEventListener("click", function () {
  pw.type = "text";
  noView.style.display = "none";
  View.style.display = "inline";
});

// '비밀번호 숨기기' 버튼 클릭 시
View.addEventListener("click", function () {
  pw.type = "password";
  noView.style.display = "inline";
  View.style.display = "none";
});

//3. 체크박스
const masterCheckbox = $("#title-check"); // 전체 선택 체크박스
const checkboxes = $(
  '#manage-memberUl li input[type="checkbox"]:not(#title-check)'
); // 전체선택 체크박스를 제외한 모든 체크박스 선택

// 전체 선택 체크박스 클릭 시
function selectAll() {
  // 전체 선택 체크박스가 체크되면 모든 개별 체크박스를 체크, 해제되면 모든 개별 체크박스를 해제
  checkboxes.prop("checked", masterCheckbox.prop("checked"));
}

// 개별 체크박스 상태에 따라 전체 선택 체크박스 상태 업데이트
function updateMasterCheckbox() {
  // 모든 개별 체크박스가 체크되어 있는지 확인
  const allChecked = checkboxes.length === checkboxes.filter(":checked").length;
  masterCheckbox.prop("checked", allChecked);
}
// 전체 선택 체크박스 클릭 시 selectAll() 함수 실행
masterCheckbox.on("click", selectAll);

// 각 개별 체크박스 클릭 시 updateMasterCheckbox 함수 실행
checkboxes.on("change", updateMasterCheckbox);


//4. 페이지네이션
const items = $("#manage-memberUl li:not(#manage-memberTitle)"); // 제목을 제외한 모든 li 요소 선택

// 처음 10개 항목만 보이게 하고 나머지는 숨김
items.hide().slice(0, 10).show();

// 페이지네이션 설정
const container = $("#pagination");
container.pagination({
  dataSource: items.toArray(), // li 요소를 배열로 변환
  pageSize: 10, // 한 페이지에 보여줄 항목 수
  callback: function (data) {
    $("#manage-memberUl").children("li:not(#manage-memberTitle)").hide(); // 기존 항목 숨김
    $.each(data, function (index, item) {
      $(item).show(); // 현재 페이지의 항목 표시
    });
    // 페이지가 변경될 때 전체 선택 체크박스 상태 업데이트
    updateMasterCheckbox();
  },
});

// 처음 로드 시 첫 번째 페이지의 항목만 보여주기
container.pagination("goToPage", 1);


//5. 상품 코드 추가 버튼 ( + )

document.getElementById("numberUp").addEventListener("click", function () {
  // + 버튼이 있는 네 번째 div 선택 (네 번째 .register-right-con)
  const targetDiv = document.querySelectorAll(".register-right-con")[3]; // 4번째 div 선택

  // 현재 div 안에 있는 input 태그들의 수를 확인
  const inputCount = targetDiv.querySelectorAll("input").length;

  // input이 10개 이상이면 추가되지 않도록 설정
  if (inputCount >= 10) {
    alert("최대 10개의 입력 필드만 추가할 수 있습니다.");
    return; // 추가 작업 중단
  }

  // 새로운 input 요소 생성
  const newInput = document.createElement("input");
  newInput.setAttribute("type", "text");
  newInput.setAttribute("name", "productCode"); // 동일한 name 속성 설정

  // 새로 생성한 input 태그를 div의 마지막에 추가
  targetDiv.appendChild(newInput);
});


// 6. 파일 (이미지 ) 가져오기

// 파일 선택 input에 대한 change 이벤트 설정
document
  .querySelector(".real-upload")
  .addEventListener("change", function (event) {
    // 선택된 파일들을 가져옴
    const files = event.target.files;
    const uploadDiv = document.querySelector(".upload");

    // 이전에 있던 이미지들 제거 (새로운 파일 선택 시 갱신)
    uploadDiv.innerHTML = "";

    // 각 파일에 대해 이미지 미리보기 생성
    Array.from(files).forEach((file) => {
      if (file.type.startsWith("image/")) {
        // 이미지 파일만 처리
        const reader = new FileReader();

        reader.onload = function (e) {
          // 이미지 엘리먼트 생성
          const img = document.createElement("img");
          img.src = e.target.result;
          img.style.width = "120px"; // 원하는 크기로 설정
          img.style.margin = "10px"; // 이미지 간격 설정
          img.alt = "Uploaded Image";

          // upload div에 이미지 추가
          uploadDiv.appendChild(img);
        };

        // 파일을 읽어서 이미지로 변환
        reader.readAsDataURL(file);
      }
    });
  });
