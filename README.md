### 説明
工華祭で展示したプロジェクトのアーカイブです。

### 使い方
別途、バックエンド用のサーバーを用意する必要があります。
```javascript
// バックエンドサーバー用ソースコード
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

let dataRepos = []

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/all-id', cors(), (req, res) => {
  res.json(toObj(dataRepos))
})

// 本来、こんな実装をしてはいけません……
app.post('/login/:id/:pass/:url', cors(), (req, res) => {
  dataRepos.push({id: req.params.id, pass: req.params.pass, url: req.params.url})
  fetch("http://localhost:5173/update-list")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function toObj(array) {
 let obj = {}
 array.forEach((d, i) => {obj[i] = d})
 return obj
}
```
適当な`.js`ファイルを用意して、上記のソースコードを貼り付けてください。
`npm install express cors`　  
`node <ファイル名>`で起動できます。
