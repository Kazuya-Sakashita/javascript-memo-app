// 追加ボタン押下時に実行する関数
const onClickAdd = () => {
  // テキストボックスのElementを取得
  const textEl = document.getElementById("add-text");
  // テキストボックスの値を取得
  const text = textEl.value;

  // テキストボックスが空の場合は処理しない
  if (text === "") return;

  // liタグを生成
  const li = document.createElement("li");

  // divタグを生成
  const div = document.createElement("div");

  // pタグ生成
  const p = document.createElement("p");
  p.textContent = text;

  // buttonタグを生成(ラベルは[削除])
  const button = document.createElement("button");
  button.textContent = "削除";

  // ボタン押下時に行を削除する処理
  button.addEventListener("click", () => {
    // 削除対象の行(li)を取得
    const deleteTarget = button.closest("li");

    // ulタグ配下から上記で特定した行を削除
    document.getElementById("memo-list").removeChild(deleteTarget);
  });

  // divタグ配下にpタグとbuttonタグを設定
  div.appendChild(p);
  div.appendChild(button);

  // liタグ配下にdivタグを設定
  li.appendChild(div);

  // メモ一覧のリストに上記のliタグを設定
  document.getElementById("memo-list").appendChild(li);

  // テキストボックスを空にする
  textEl.value = "";
};

// [追加]ボタン押下時にonClickAdd関数を実行するように登録
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
