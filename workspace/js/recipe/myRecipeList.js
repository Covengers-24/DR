const buttons = document.querySelectorAll('.myRecipeList-rightButton button');

    // 기본적으로 첫 번째 버튼에 스타일을 적용합니다.
    buttons[0].classList.add('active');

    // 버튼 클릭 시 이벤트 핸들러
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // 모든 버튼에서 active 클래스를 제거합니다.
            buttons.forEach(btn => btn.classList.remove('active'));

            // 클릭한 버튼에 active 클래스를 추가합니다.
            this.classList.add('active');
        });
    });