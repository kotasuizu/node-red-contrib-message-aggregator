# node-red-contrib-message-aggregator

複数からの入力を集約するためのNode-RED用のNodeです。  

## How to Install

このNodeを使用するためには、Node-REDアプリケーションのpackage.json dependenciesに以下を追加し、再アップロードしてください。

- "node-red-contrib-message-aggregator":"0.0.x"

### Bluemixの場合、package.jsonに追加する手順は以下となります
1. BluemixのNode-RED用Runtimeより、Starter codeをダウンロードする
2. DLしたアーカイブ内にあるpackage.jsonを開き、dependenciesに上記のエントリーを追加し保存する
3. Bluemix Runtimeにpushする(cf push <Application Name>)
4. Node-REDのWeb画面を開き、Node一覧のfunctionセクション内に、Aggregator が追加されたことを確認する

## How to Use

### Aggregator Nodeの設定は以下となります
- Aggregations : 集約対象となるメッセージの着信待ち数を設定する


## Copyright and license

Copyright (c) 2016 Kota Suizu  
Released under the MIT license  
http://opensource.org/licenses/mit-license.php
