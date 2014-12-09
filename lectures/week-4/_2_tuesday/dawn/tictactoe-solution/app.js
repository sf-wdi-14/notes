var moves = 0;

var marker = function() {
  return moves % 2 === 0 ? "X" : "O";
};

$('.box').click(function(e) {
  if (!$(this).html()) {
    var turn = marker();
    $(this).html(turn);
    $(this).addClass(turn);
    moves++;
  }
});

$('.box').mouseenter(function(e) {
	$(this).css('background-color', 'green')
});

$('.box').mouseleave(function(e) {
	$(this).css('background-color', 'white')
});