設定をクリアするためには、Nginxの設定ファイルを元に戻し、Certbotで取得したSSL証明書を削除する必要があります。以下は手順です。

### 手順 1: Certbotで取得したSSL証明書を削除

Certbotで取得したLet's EncryptのSSL証明書を削除するには、次の手順を行います。

1. **証明書の削除**

   まず、どのドメインに対して証明書が発行されているか確認します。

   ```bash
   sudo certbot certificates
   ```

   このコマンドで発行済みの証明書が一覧表示されます。そのリストから削除したいドメインを確認し、次のコマンドで削除します。

   ```bash
   sudo certbot delete --cert-name your-domain.com
   ```

2. **自動更新の設定解除**
   
   Certbotの自動更新設定もクリアします。自動更新のスケジュールされたジョブは、`/etc/cron.d/certbot` または `systemctl list-timers` コマンドで確認できますが、通常これをクリアする必要はありません。  
   
   必要に応じて `sudo apt remove certbot` を使ってCertbot自体をアンインストールできます。

### 手順 2: Nginx設定ファイルをリセット

Nginxの設定をクリアして、Next.jsに関連するSSLやリバースプロキシの設定を削除します。

1. **Nginxの設定ファイルを編集**
   
   `/etc/nginx/sites-available/default` または `/etc/nginx/sites-available/your-site` を編集して、SSLの設定やリダイレクトなどを削除します。

   ```bash
   sudo nano /etc/nginx/sites-available/default
   ```

   以下のようなSSLに関する部分をすべて削除、もしくはコメントアウトします。

   ```nginx
   #listen 443 ssl;
   #ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
   #ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;
   #ssl_protocols TLSv1.2 TLSv1.3;
   #ssl_prefer_server_ciphers on;
   ```

   また、HTTPからHTTPSへのリダイレクト設定も削除します。

   ```nginx
   #return 301 https://$host$request_uri;
   ```

2. **設定をテストしてNginxを再起動**

   設定を保存して、Nginxの設定を再度テストします。

   ```bash
   sudo nginx -t
   ```

   問題がなければ、Nginxを再起動します。

   ```bash
   sudo systemctl restart nginx
   ```

### 手順 3: Next.jsの起動設定を確認

Next.jsの起動に関しては、次のコマンドでプロセスを停止し、リセットが必要な場合は適切に再起動します。

```bash
# もしNext.jsアプリがバックグラウンドで動作している場合はプロセスを確認して停止
sudo killall node
```

次に、`next.config.js` で行ったホストの設定が問題なければ、通常の`npm run dev`コマンドで開発環境を確認してみてください。

### 手順 4: Nginxをアンインストールする（必要に応じて）

もしNginx自体が不要であれば、以下のコマンドでアンインストールできます。

```bash
sudo apt remove nginx
```

---

これで設定がクリアされ、NginxやLet's Encryptに関する設定が削除されます。必要に応じてNext.jsの設定も確認してください。