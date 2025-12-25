### セットアップ手順
①Webサーバーおよび、②バックエンドサーバーの起動が必要です。
### ① Webサーバー
Wi-fi接続に対応したDebian/Ubuntuマシンでのみ実行可能です。（Debian 12にて動作を確認）
```
sudo apt install hostapd dnsmasq
systemctl stop NetworkManager.service
git clone git@github.com:itu61/Kokasai_Exhibit.git
cd Kokasai_Exhibit
./configure.sh
```
その後、`npx vite --host`で`localhost`にてWebサーバーが起動します。`Ctrl+D`で停止できます。
また、`SSID: DENSAN_FAKE_AP`および`PASS: password`で専用のアクセスポイントに接続することが可能です。


### ② バックエンドサーバー
以下の手順でバックエンドサーバーが起動します。
```
mkdir Kokasai_Backend
cd Kokasai_Backend
cp /path/to/Kokasai_Exhibit/backend.js ./
npm install express cors
```
その後、`node backend.js`でバックエンドサーバーが起動します。`Ctrl+D`で停止できます。
