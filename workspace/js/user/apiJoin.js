$(document).ready(function() {
  // 전체 동의 체크박스 클릭 시 나머지 체크박스 모두 체크 또는 해제
  $('#checkAll').on('change', function() {
    var isChecked = $(this).is(':checked');
    $('.apijoin-checkboxInput').not('#checkAll').prop('checked', isChecked);
  });

  // 개별 체크박스 상태 변경 시 전체 동의 체크박스 상태도 변경
  $('.apijoin-checkboxInput').not('#checkAll').on('change', function() {
    var allChecked = $('.apijoin-checkboxInput').not('#checkAll').length === $('.apijoin-checkboxInput:checked').not('#checkAll').length;
    $('#checkAll').prop('checked', allChecked);
  });
});