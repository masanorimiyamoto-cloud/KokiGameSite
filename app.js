// app.js
const { createApp, ref } = Vue

createApp({
  setup() {
    // 8x8の盤面を作成（各マスの初期所有者は ""）
    const board = ref(
      Array.from({ length: 8 }, () =>
        Array.from({ length: 8 }, () => ({ owner: "" }))
      )
    )

    // ターン管理 (true: black, false: white)
    const isOddTurn = ref(true)

    /**
     * 指定マスの所有者を変更する
     */
    function changeOwner(row, col, owner) {
      board.value[row][col].owner = owner
    }

    /**
     * 盤面初期化
     */
    function initializeBoard() {
      // まず全てのマスを空に
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          board.value[r][c].owner = ""
        }
      }
      // 初期配置
      changeOwner(3, 3, "black")
      changeOwner(3, 4, "white")
      changeOwner(4, 3, "white")
      changeOwner(4, 4, "black")
      // ターンを先手(black)にリセット
      isOddTurn.value = true
    }

    /**
     * マスをクリックしたときの処理
     */
    function clickSquare(row, col) {
      // 選択不可の場合は return
      if (!canSelect(row, col)) return

      // 所有者を現在のターンに
      changeOwner(row, col, getTurnString())

      // ターンを交代
      changeTurn()
    }

    /**
     * マスが選択可能かどうか
     */
    function canSelect(row, col) {
      return board.value[row][col].owner === ""
    }

    /**
     * 今のターンの文字列を取得
     */
    function getTurnString() {
      return isOddTurn.value ? "black" : "white"
    }

    /**
     * ターンを交代する
     */
    function changeTurn() {
      isOddTurn.value = !isOddTurn.value
    }

    // 最初にボードを初期化
    initializeBoard()

    // テンプレートから使う変数・関数をreturn
    return {
      board,
      initializeBoard,
      clickSquare,
    }
  }
}).mount('#app')
