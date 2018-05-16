$(window).on("load", () => {
  $('#wrapper').addClass('loaded');
});

$('.more-info').click(() => {
  $("#card").toggleClass('flip');
  $('#arrow').remove();
});

$('#background').click(() => {
  $('#card').removeClass('flip');
});
