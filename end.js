$(document).ready(function(){
var DisplayResult =
function(score){
  if(window.confirm('ゲーム終了です\nあなたのスコアは'+score+'点です\n\nもう一度遊びますか？')){
    console.log('abc');
  }
}
swal({
	title: "アラートです！",
	text: "メッセージがココに入ります",
        confirmButtonText: '了解！',
        confirmButtonColor: '#DD6B55'
	});
});