const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //li生成
  const li = document.createElement("li");
  li.className = "list-row";

  //div生成
  const div = document.createElement("div");

  //p生成
  const p = document.createElement("p");
  p.innerText = inputText;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(li)を未完了リストから削除
    deleteFormIncompleteList(deleteButton.closest(".list-row"));

    //完了リストに追加する要素
    const addTarget = completeButton.closest(".list-row");
    //TODO内容テキストを取得
    const text = addTarget.querySelector("p").innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //pタグ生成
    const p = document.createElement("p");
    p.innerText = text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(li)を完了リストから削除
      const deleteTarget = backButton.closest(".list-row");
      document.getElementById("complete-list").removeChild(deleteTarget);
    });

    //liタグの子要素に各要素を設定
    addTarget.prepend(document.createElement("div"));
    addTarget.querySelector("div").appendChild(p);
    addTarget.querySelector("div").appendChild(backButton);
    // console.log(addTarget);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFormIncompleteList(deleteButton.closest(".list-row"));
  });

  //liタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

//未完了リストから指定の要素を削除
const deleteFormIncompleteList = (target) => {
  //const deleteTarget = deleteButton.closest(".list-row");
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
