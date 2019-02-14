// aws dynamodb scan \
// --endpoint-url http://localhost:8000 \
// --table-name Music


const express = require('express')
const app = express()

const AWS = require('aws-sdk');
AWS.config.update({
    endpoint : 'http://localhost:8000', // エンドポイント
    region : 'ap-northeast-1'
});
const docClient = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = 'Music';

// DynamoDB scanで必要なパラメータ
let params = {
    TableName : 'Music' // テーブル名
};


// scanの実行(非同期で実行され、コールバックで結果を受ける)
docClient.scan(params, function(err, data) {
    if (err) {
        // エラー時の処理を記述
        console.log("エラー = " + err);
    } else {
        // 成功時の処理を記述(取得結果はdataに格納される)
        console.log("成功 = " + JSON.stringify( data ));
        data.Items.forEach(dt => {
            console.log(dt.Artist);
            console.log(dt.SongTitle);
            console.log(dt.AlbumTitle);
        });
    }
});

app.get('/', (req, res) => res.send('Hellow World'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
