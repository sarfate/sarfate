$(document).ready(function(){
  var timeLimit = 5; // 制限時間(単位：秒)
  var count = 0; // 経過時間
  var score = 0;
  var getRandomInt = function(min, max){ // min~maxの乱数を返却
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  var moveObject = function(){ // 物体を移動させる
    var destinationTop  = getRandomInt(0, window.innerHeight - parseInt($('#target').css('height'), 10));
    var destinationLeft = getRandomInt(0, window.innerWidth  - parseInt($('#target').css('width') , 10));
    $('#target').animate({top: destinationTop, left: destinationLeft}, 'slow', null, arguments.callee);
  };
  var init = function(){ // 物体の初期配置，タイマーの設置等
    count = score = 0;
    var destinationTop  = getRandomInt(0, window.innerHeight - parseInt($('#target').css('height'), 10));
    var destinationLeft = getRandomInt(0, window.innerWidth  - parseInt($('#target').css('width') , 10));
    $('#target').css({top: destinationTop, left: destinationLeft, display: 'block'});
    $('#timer').text('残り' + timeLimit + '秒');
    $('#timer').css({color: 'black', display: 'block'});
    var countDownIntervalId = setInterval(function(){
      if (timeLimit > count) { // 制限時間内であればカウントダウン継続
        $('#timer').html('残り' + (timeLimit - (++count)) + '秒');
        if (timeLimit - count <= 3) {
          $('#timer').css({color: 'red'});
        }
      } else { // 時間切れの場合結果を表示
        clearInterval(countDownIntervalId);
        $('#target').css({display: 'none'});
        displayResult(score);
      }
    }, 1000);
    moveObject();
  };
  // 結果をアラートで出力
  var displayResult = function(score){
    if(window.confirm('ゲーム終了です\nあなたのスコアは' + score + '点です\n\nもう一度遊びますか？')){
      init();
    } else {
      $('#startButton').css({display: 'block'});
      $('#timer').css({display: 'none'});
    }
  };

  // スタートボタンがクリックされたらゲームが開始される  
  $("#startButton").click(function () {
    init();
    $('#startButton').css({display: 'none'});
  });
    
  // 物体が押された場合，スコアを加算し，ランダムに再配置
  $('#target').click(function(){
    console.log('score:', ++score);
  });
});