// POSTするデータを作成

export   function fetchAuth(form) {

  // try {
    const response   =  fetch(`http://localhost:3000/aaa`, {
      cache: 'no-store',
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form)
    })


    
    .then(data => {
      try {
        const jsonData = JSON.parse(data); // 文字列をJSONに変換
        console.log(jsonData);
      } catch (e) {
        console.error('Response is not valid JSON:', e);
      }
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}