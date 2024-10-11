// -- 환경기여 랭킹 물음표 -- //
$(".userRankquestion").on("mouseenter", () => {
    $(".userRankAnswer").css('display', 'block');
})
$(".userRankquestion").on("mouseleave", () => {
    $(".userRankAnswer").css('display', 'none');
})