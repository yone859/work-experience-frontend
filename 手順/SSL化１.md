NGINXでSSL（HTTPS）の設定を行うには、以下の手順を踏む必要があります。既にドメインでHTTP接続ができているとのことなので、SSL証明書を取得し、NGINXに設定する部分にフォーカスします。

### 手順

#### 1. SSL証明書の取得
SSL証明書は、Let's Encryptの無料証明書を使用するのが一般的です。`Certbot`というツールを使うと簡単に取得できます。

まず、`Certbot`をインストールします。

**Ubuntuの場合**:

```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx
```

#### 2. SSL証明書の発行
インストールが完了したら、以下のコマンドを実行してSSL証明書を取得します。

```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

`your-domain.com`の部分をあなたのドメイン名に置き換えてください。このコマンドでは、NGINXの設定を自動的に検出して、証明書を発行・設定してくれます。

#### 3. 設定ファイルの確認
証明書が正常に発行されると、NGINXの設定ファイルが自動で更新されますが、必要に応じて手動で確認できます。以下のようにSSL関連の設定が含まれているか確認してください。

**NGINXの設定例**（`/etc/nginx/sites-available/default`またはドメイン用設定ファイル）:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    return 301 https://$host$request_uri; # HTTPからHTTPSへのリダイレクト
}

server {
    listen 443 ssl;
    server_name your-domain.com www.your-domain.com;

    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        proxy_pass http://localhost:3000; # Next.jsや他のアプリケーションへのリバースプロキシ設定
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

#### 4. NGINXの再起動
設定が完了したら、NGINXを再起動して変更を反映させます。

```bash
sudo systemctl restart nginx
```

#### 5. 自動更新の設定
Let's Encryptの証明書は90日間有効なので、`certbot`が証明書を自動更新するように設定します。

以下のコマンドで`certbot`の更新が有効か確認できます。

```bash
sudo certbot renew --dry-run
```

問題がなければ、`cron`や`systemd`で自動更新が設定されています。

---

これでNGINXを使ったSSL(HTTPS)接続ができるようになります。