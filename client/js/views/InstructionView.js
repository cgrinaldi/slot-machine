module.exports = {
  init: function() {
    // Show instructions and animate to draw user's attention
    $('#instructions p').fadeIn(100, function() {
      $(this).animate({
        fontSize: '24px'
      }, 2000)
      $(this).animate({
        fontSize: '16px',
        opacity: 0
      }, 2000);
    });
  }
}
