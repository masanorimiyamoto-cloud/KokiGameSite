// ターンを示す変数
let isOddTurn = true;

/*****************************************
 * イベント
 *****************************************/
$(function () {
  // マス目にイベントを設定する
  $(".square").click(clickSquareEvent);

  // 盤面を初期化する
  initializeEvent();
});

/**
 * マス目クリックイベント
 */
function clickSquareEvent() {
  // クリックされたマス目のオブジェクトを取得する
  let square = $(this);
  
  // クリックされたマス目が選択できない場合はスキップ
  if(!canSelect(square)) {
    return;
  }

  // マスの所有者を変更する
  changeOwner(square);
}


/**
 * 盤面初期化イベント
 */
 function initializeEvent() {
  // 初期値設定
  changeOwner(getTargetSquare(3, 3));
  changeOwner(getTargetSquare(3, 4));
  changeOwner(getTargetSquare(4, 4));
  changeOwner(getTargetSquare(4, 3));
}

/*****************************************
 * 内部関数
 *****************************************/
/**
 * マス目の所有者を変更する
 */
 function changeOwner(square) {
  // マス目にピースを置く
  putPiece(square, getTurnString());

  // ターンを変更する
  changeTurn();
}

/**
 * マス目にピースを置く
 */
function putPiece(targetSquare, owner) {
  targetSquare.text("●").attr("data-owner", owner).addClass("selected");
}

/**
 * ターンを示す文字列を取得する
 */
function getTurnString() {
  if (isOddTurn) {
    return "black";
  }
  return "white";
}

/**
 * ターンを変更する
 */
function changeTurn() {
  // ターンを変更する
  isOddTurn = !isOddTurn;
}

/**
 * 指定位置のマス目オブジェクトを取得する
 */
function getTargetSquare(row, col) {
  return $("[data-row=" + row + "][data-col=" + col + "]");
}

/**
 * 指定されたマス目が選択できるか判定する
 */
function canSelect(square) {
  // 既にピースが設定されている場合は選択不可
  if (square.hasClass("selected")) {
    return false;
  }
  return true;
}
























