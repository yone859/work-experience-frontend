Next.jsアプリに対してNGINXを使用してSSL（HTTPS）を設定する方法について、既にドメインでHTTP接続ができている状況に合わせて詳しく説明します。Let's Encryptの無料SSL証明書を使用し、`yone-t.click`と`www.yone-t.click`の両方をHTTPS化し、Next.jsアプリにプロキシする構成になります。

### SSL(HTTPS)設定手順

#### 1. Certbotのインストール
Let's Encryptから無料のSSL証明書を取得するために`Certbot`を使用します。まずは、CertbotとNGINXプラグインをインストールします。

```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx
```

#### 2. SSL証明書の取得
次に、Let's Encryptの証明書を取得します。`yone-t.click`と`www.yone-t.click`の両方に対して証明書を発行します。

```bash
sudo certbot --nginx -d yone-t.click -d www.yone-t.click
```

このコマンドを実行すると、CertbotがNGINXの設定を自動的に検出し、証明書を発行して設定を行います。

#### 3. NGINXの設定確認
証明書の取得が完了すると、NGINXの設定が自動的に更新されますが、手動で確認することをお勧めします。通常、`/etc/nginx/sites-available/default`または`/etc/nginx/sites-available/your-domain`に次のような設定が追加されているはずです。

```nginx
server {
    listen 80;
    server_name yone-t.click www.yone-t.click;
    return 301 https://$host$request_uri;  # HTTPからHTTPSへのリダイレクト
}

server {
    listen 443 ssl;
    server_name yone-t.click www.yone-t.click;

    # SSL証明書のパス
    ssl_certificate /etc/letsencrypt/live/yone-t.click/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yone-t.click/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        proxy_pass http://localhost:3000;  # Next.jsアプリが動作するポートにリバースプロキシ
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;  # HTTPS情報をNext.jsに渡す
    }
}
```

- `proxy_pass http://localhost:3000;`の部分は、Next.jsが稼働しているポートを指定します。Next.jsはデフォルトでポート`3000`を使用します。
- `proxy_set_header X-Forwarded-Proto $scheme;`により、Next.jsアプリがリクエストがHTTPSであることを認識できるようにしています。

#### 4. Next.jsの起動
Next.jsアプリは引き続きHTTPで動作させます。HTTPS通信はすべてNGINXが処理し、NGINXがHTTPプロキシを介してNext.jsサーバーにリクエストを渡します。

```bash
npm run build
npm start  # ポートを指定する場合は next start -p 3000
```

#### 5. NGINXの設定テストと再起動
設定が正しいかどうかを`nginx -t`でテストします。

```bash
sudo nginx -t
```

エラーが出なければ、NGINXを再起動して設定を反映します。

```bash
sudo systemctl restart nginx
```

#### 6. 自動更新の設定
Let's Encryptの証明書は90日ごとに更新が必要です。`certbot`は自動で証明書を更新する設定が既に入っている可能性がありますが、確認するために次のコマンドを実行してみてください。

```bash
sudo certbot renew --dry-run
```

これで問題がなければ、証明書は自動で更新されます。

---

### まとめ

これらの手順で、Next.jsアプリをHTTPSで接続するためのNGINXのSSL設定が完了します。

- HTTPリクエストはすべてHTTPSにリダイレクトされます。
- Next.jsアプリ自体はHTTPで稼働し、NGINXがSSLを処理します。