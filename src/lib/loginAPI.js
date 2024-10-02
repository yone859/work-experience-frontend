// POSTするデータを作成

export function fetchAuth(form) {

  try {
    const response   =  fetch(`http://localhost:3000/aaa`, {
      cache: 'no-store',
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form)
    })

    // レスポンスが成功（200系）かどうかをチェック
    if (!response.ok) {
      const errorData = response.json();
      console.error('Error:', errorData.message);
      // エラーの場合の処理
      return Promise.reject(new Error(errorData.message));
    }

    const data = response.json();
    console.log('Success:', data.message);
    // 成功の場合の処理
    return Promise.resolve(data.message);
  } catch (error) {
    console.error('Network error:', error);
    // ネットワークエラーなどのハンドリング
    return Promise.reject(new Error('Network error occurred'));
  }
}