/*****************************************
 * イベント
 *****************************************/
$(function () {
  // マス目にイベントを設定する
  $(".square").click(clickSquareEvent);
});

/**
 * マス目クリックイベント
 */
function clickSquareEvent(){
  // クリックされたマス目のオブジェクトを取得する
  let square = $(this);

  // マス目にピースを置く
  putPiece(square, "black");
}

/*****************************************
 * 内部関数
 *****************************************/
/**
 * マス目にピースを置く
 */
function putPiece(targetSquare, owner) {
  targetSquare.text("●").attr("data-owner", owner).addClass("selected");
}


























