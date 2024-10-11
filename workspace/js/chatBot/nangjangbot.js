const sidebar = document.getElementById('nangjangbot-sideBar');
const button = document.getElementById('nangjangbot-btnContainer');
const closeBtn = document.getElementById('nangjangbot-closeBtn');
let isOpen = true; // 사이드바가 열려있는 상태

button.addEventListener('click', () => {
    if (isOpen) {
        sidebar.style.left = '-350px'; // 사이드바 닫기
    } else {
        sidebar.style.left = '0'; // 사이드바 열기
    }
    isOpen = !isOpen; // 상태 토글
});

closeBtn.addEventListener('click', () => {
  sidebar.style.left = '-400px'; // 사이드바 닫기
  isOpen = false; // 상태를 닫힘으로 설정
});