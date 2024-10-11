document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'ko',
        events: [], // 출석 체크된 날짜를 서버에서 가져와 표시
        dayRender: function(info) {
            // 오늘 날짜에 체크 이미지 추가 로직을 제거 (출석 체크 버튼 클릭 시에만 추가되도록 변경)
        }
    });
    calendar.render();

    var isCheckedIn = false; // 출석 체크 상태 저장 변수

    // 출석 체크 버튼 클릭 이벤트
    document.getElementById('checkInButton').addEventListener('click', function() {
        if (isCheckedIn) {
            alert("이미 출석 체크가 완료되었습니다."); // 이미 체크한 경우 알림
        } else {
            // 오늘 날짜의 셀에 체크 이미지 추가
            var todayCell = calendar.getDate(); // 오늘 날짜 가져오기
            var todayDateString = todayCell.toISOString().split('T')[0]; // YYYY-MM-DD 형식으로 변환
            var todayElements = document.querySelectorAll(`.fc-daygrid-day[data-date="${todayDateString}"]`);

            todayElements.forEach(function(element) {
                // 오늘 날짜에 체크 이미지를 추가
                var checkImageDiv = document.createElement('div');
                checkImageDiv.className = 'check-image'; // 이미지 스타일을 적용
                checkImageDiv.style.position = 'absolute';
                checkImageDiv.style.top = '50%';
                checkImageDiv.style.left = '50%';
                checkImageDiv.style.transform = 'translate(-50%, -50%)';
                checkImageDiv.style.width = '40px';
                checkImageDiv.style.height = '40px';
                checkImageDiv.style.backgroundImage = "url('./../../image/myPage/checkBox.png')";
                checkImageDiv.style.backgroundSize = 'contain';
                checkImageDiv.style.backgroundRepeat = 'no-repeat';

                element.appendChild(checkImageDiv); // 체크 이미지 추가
                element.classList.add('active'); // 테두리 추가
            });

            isCheckedIn = true; // 체크 상태 변경
            alert("20포인트가 적립되었습니다."); // 알림창 표시
        }
    });
});