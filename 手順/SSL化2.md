既存のNext.jsアプリにNGINXを使ってSSL（HTTPS）を適用する場合、基本的な流れは変わりませんが、いくつかの注意点があります。Next.jsアプリをNGINXでリバースプロキシする際に、特定の設定が必要です。

以下はNext.jsアプリに適用する際の手順とポイントです。

### 手順

#### 1. Next.jsアプリの設定

Next.jsアプリ自体はSSL（HTTPS）対応を直接設定する必要はなく、NGINX側でSSLを処理し、Next.jsはHTTPで動作させます。Next.jsは通常`localhost`や特定のポート（例: 3000）で動作します。

#### 2. NGINX設定のポイント

NGINXが外部からのHTTPSリクエストを受け取り、Next.jsサーバー（通常はHTTP、`localhost:3000`）にリバースプロキシする構成になります。

**NGINXの設定例**:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    return 301 https://$host$request_uri;  # HTTPからHTTPSへのリダイレクト
}

server {
    listen 443 ssl;
    server_name your-domain.com www.your-domain.com;

    # SSL証明書の設定
    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        proxy_pass http://localhost:3000;  # Next.jsサーバーへのリバースプロキシ
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;  # HTTPSプロトコルを伝える
        proxy_redirect off;  # リダイレクトが無限ループしないようにオフにする
    }
}
```

#### 3. Next.jsの`next.config.js`設定（HTTPSを意識する）
Next.jsアプリがリバースプロキシ下で動作していることを認識するために、`next.config.js`ファイルに以下の設定を追加することをお勧めします。特に`X-Forwarded-Proto`ヘッダーを使用して、プロキシ経由で来るリクエストがHTTPSであることをNext.jsに伝えます。

```js
module.exports = {
  // これでプロキシ環境を意識した設定が可能
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Forwarded-Proto",
            value: "https", // HTTPSであることを伝える
          },
        ],
      },
    ];
  },
};
```

#### 4. Next.jsサーバーの起動

Next.jsアプリは引き続きHTTP（通常はポート3000）で動作させてください。NGINXがHTTPSを処理し、Next.jsにはHTTPリクエストをプロキシします。

```bash
npm run build
npm start  # または、ポートを指定する場合: next start -p 3000
```

#### 5. NGINXの再起動

NGINXの設定ファイルを編集後、設定を反映するためにNGINXを再起動します。

```bash
sudo systemctl restart nginx
```

---

### 注意点

1. **X-Forwarded-Protoの設定**: NGINXがHTTPSリクエストをHTTPに変換してNext.jsにプロキシするため、`X-Forwarded-Proto`ヘッダーを設定しておかないと、Next.jsアプリがHTTPSを意識せず、セキュリティ警告やリダイレクトループが発生する場合があります。

2. **証明書の更新**: Let's Encryptの証明書は90日ごとに更新が必要なので、`certbot`の自動更新機能が正しく動作しているか確認してください。

3. **Next.jsのポート**: `proxy_pass`の`localhost:3000`は、Next.jsアプリの起動しているポート番号を指します。アプリが異なるポートで動作している場合、この値を修正してください。

---

これらを踏まえれば、Next.jsアプリでもNGINXを使用してSSL(HTTPS)を問題なく適用できます。