$(document).ready(function(){
  var count = 0;
  
  function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  /* 初期化 */
  var initTargetPosition = function(){
    var top  = getRandomInt(0, window.innerHeight - parseInt($('#target').css('height'), 10));
    var left = getRandomInt(0, window.innerWidth  - parseInt($('#target').css('width') , 10));
    $('#target').css({top: top, left: left});
  };
  
  initTargetPosition();
  
  $('#target').click(function(){
    $(this).css({display: 'none'});
    var top  = getRandomInt(0, window.innerHeight - parseInt($(this).css('height'), 10));
    var left = getRandomInt(0, window.innerWidth  - parseInt($(this).css('width') , 10));
    console.log('top:', top, ' left:', left);
    $(this).css({top: top, left: left, display: 'block'});
  });
});