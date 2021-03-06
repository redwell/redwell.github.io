
## ブラウザのConsole画面の使い方
JavaScriptを触ってみようということで、お手軽にJavaScriptを書いて動かせるブラウザのConsole画面の説明からしたいと思います。

JavaScriptを書いて動かしやすい環境なのでGoogle Chromeで説明します。

### 空白ページを開く
まずはChromeを開いて、アドレスバーに「about:blank」と入力してEnterを押します。
そうすると空白ページが出てきます。

<img src="./img/about_blank.png" width="50%"/>

### デベロッパーツールを開く
次にF12を押します。そうすると右側に新しい画面が出てきます。
Chromeではこの画面を**デベロッパーツール**といいます。
デベロッパーは開発者という意味です。

赤枠で囲ったConsoleというところが開かれていれば準備OKです。

<img src="./img/dev_tool.png" width="50%"/>


### ConsoleにJavaScriptのコードを入力してみる
ConsoleでJavaScriptを実行する手順を確認しておきましょう。

Console画面に下記のように入力してみてください。
自分で書いたコードの意味が理解できるようになるのも目標の1つなので、コピペではく手入力してください。

```
console.log("初めてのJavaScript");
```

<img src="./img/my_first_js01.png" width="50%"/>



Enterを押すと実行されます。
赤枠で囲った「初めてのJavaScript」が実行結果です。
console.log();は()の中身をそのままConsole画面に表示する関数です。
この後もいろいろな場面で利用しますので覚えておいてください。

<img src="./img/my_first_js02.png" width="50%"/>



### 四則演算してみる
Console画面の入力に慣れるために、四則演算してみましょう。

```
4+1
```
<img src="./img/calc01.png" width="50%"/>

```
43-28
```
<img src="./img/calc02.png" width="50%"/>

```
12*31
```
<img src="./img/calc03.png" width="50%"/>

```
64/8
```
<img src="./img/calc04.png" width="50%"/>

### きれいに割り切れない数の割り算について
JavaScriptに限らず、プログラミングにおいてきれいに割り切れない数の割り算はとても重要なテーマです。

特に割り算の余りの部分が重要で、余りの値を使って処理を作ることがよくあります。

そこできれいに割り切れない数について見ていきます。

#### まずは普通に割る

```
6/4
```
<img src="./img/calc05.png" width="50%"/>

1.5と答えが出てきました。JavaScriptでは一般的な人間が想定しているような答えを返してくれるようです。

余談ですがプログラミング言語の中には小数点までは自動計算してくれず、単に「1」と返すものもあります。

ひとまずここではJavaScriptは少数点まで自動計算してくれることを確認しました。


### 余りだけを取り出したい
次に余りだけを取り出したい場合について見ていきます。

プログラミング言語には四則演算だけでなく、余りを求める演算子も定義されています。

JavaScriptでは余りを求める際は「%」を使います。

```
6%4
```
<img src="./img/calc08.png" width="50%"/>


ちなみになぜ余りを求める演算子が生まれたのかですが、調べてみても分かりませんでした・・・おそらく単純によく使うからだと思われます。




#### 商だけ取り出したい
では商だけを取り出したい場合は、どのようにすればいいでしょうか？

JavaScriptに標準で準備されている機能の1つに、商だけを取り出すものがあります。
それを使ってみましょう。

```
Math.floor(6/4)
```
<img src="./img/calc06.png" width="50%"/>

MathはMathematicsの略で数学という意味です。
Mathの中に数学に関する機能がたくさん詰まっています。

数学に関する組み込み機能を使う場合は、Mathの後に.（ドット）を書いて、そのあとに機能名をつけて呼び出します。

例えば以下のようなものがあります。
- Math.floor(数値)
  - 切り捨て
- Math.ceil(数値)
  -切り上げ
- Math.round(数値)
  -四捨五入
- Math.random()
  - 0以上1未満のランダムな数値を返す（乱数）

<img src="./img/calc07.png" width="50%"/>

※ここでは紹介しませんが、機能は他にも[たくさんあります](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math)。


### その他の演算
数字同士の足し算は数字が足されますが、文字の足し算はどうなるか見ておきましょう。

```
console.log("私は" + "JavaScriptを勉強中です。");
```
<img src="./img/calc09.png" width="50%"/>

文字列が連結されて表示されました。


では文字列と数字の足し算はどうでしょう？

```
console.log("私は永遠の" + 18 + "歳です。");
```
<img src="./img/calc10.png" width="50%"/>

文字列と数字が連結されて表示されました。
このようにJavaScriptでは足し算に文字列を含めると、全体が文字列として扱われます。


このテクニックはよく使われます。
この後の学習でも出てくるので覚えておいてください。


### まとめ
ここまででConsole画面にコードを入力して実行する流れが分かったと思います。

ちなみにF5などを押すと画面が再読み込みされて、Console画面の中身もクリアされます。

このあとの記事で数行程度のコードを書く予定ですが、データを消さずに保存しておきたい場合はメモ帳などに書いてからコピペすることをオススメします。





[< JavaScriptについて](./index.html) | [変数の基本 >](./index3.html)

<hr>

[0.JavaScriptについて](./index.html)
[1.ブラウザのConsole画面の使い方](./index2.html)
[2.変数の基本](./index3.html)
[3.順次処理](./index4.html)
[4.分岐処理](./index5.html)
[5.反復処理](./index6.html)
[6.関数](./index7.html)
[7.データ構造について](./index8.html)
[8.Web APIを叩いてみよう](./index9.html)
[9.HTMLと組み合わせて使ってみよう](./index10.html)
