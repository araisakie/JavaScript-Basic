/**
 * const let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数の上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能　　再宣言不可能
// val2 = "let変数を上書き";
// console.log(val2);

// const変数は上書き不可能　　再宣言不可能
// const val3 = "const変数";
// console.log(val3);

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "わやじゃけえ",
//   age: 27
// };
// val4.name = "じゃけえ";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bitd";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "わやじゃけえ";
// const age = 27;
//　「私の名前はわやじゃけえです」
//　従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + 27 + "歳です。";
// console.log(message1);

// テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

// アロー関数 一行で処理が済む場合はreturnを省力できる
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// returnの省力バージョン
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 50));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "sakie",
//   age: 27
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;
// console.log(message1);

// 分割代入
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です`;
// console.log(message2);

// 配列の場合;
// const myProfile = ["sakie", 27];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello("sakie");

/**
 * スプレット構文
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...num3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(num3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [100, 500];

// コピー
// const arr6 = [...arr4];
// console.log(arr6);

// 結合
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterを使用した配列の処理
 */
// 従来の方法
// const nameArr = ["新井", "黛", "叶"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// returnされた結果に基づいて新しい配列を生成する
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// 配列をループして処理する
// nameArr.map((name, index) =>
//   console.log(`${index + 1}番目は${nameArr[index]}です。`)
// );

// const newNameArr = nameArr.map((name) => {
//   if (name === "新井") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// filter
// 奇数の数字だけ取り出す
// const number = [1, 2, 3, 4, 5];
// const newNumber = number.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumber);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtureの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "tureです" : "falseです";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// 引数を受け取ってその値を合計したときに許容範囲ないかチャック
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲ないです";
// };
// console.log(checkSum(10, 20));

/**
 * 論理演算子の本当の意味 && ||
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtureになります");
// }

// if (flag1 && flag2) {
//   console.log("1も2もtureになります");
// }

// ||　は左側がfalseになら右側を返す、左側がtureなら左側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がtureなら右側を返す、左側がfalseなら左側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
