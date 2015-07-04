$(document).ready(function(){
  var count = 0;
  
  $('#target').click(function(){
    $(this).css('display', 'none');
    var x = getRandomInt(0, window.innerWidth  - parseInt($(this).css('width') , 10));
    var y = getRandomInt(0, window.innerHeight - parseInt($(this).css('height'), 10));
    $(this).css({top: y, left: x, display: 'block'});
  });
  
  function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
});