  export async  function fetchCreateCareer(form) {

    const body = new FormData()
    body.append("name", "tanaka")
    body.append("age", 12)

  const data = {
      method: 'POST',
      cache: 'no-store',
      body: body,
      
  }
    
  const res = await fetch(
    `http://localhost:3000/create-work-experience`, data)
  .then(response => {
    // レスポンスが成功かどうか確認
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }


  })
  // .then(data => {
  //   // 取得したデータを処理
  //   return  data;
  // })
  .catch(error => {
    // エラーハンドリング
    console.error('API取得中にエラーが発生しました:', error);
  });
  console.log("成功")
  return 

  }