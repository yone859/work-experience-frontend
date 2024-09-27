// import prisma from './prisma';



  export async  function fetchWorkExpAPI(careerListLength=0) {
    
  const res = await fetch(
    `http://localhost:3000/top?current_record=${careerListLength+1}&next_fetch_record=${careerListLength+3}`, {
    cache: 'no-store',
  })
  .then(response => {
    // レスポンスが成功かどうか確認
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // レスポンスを JSON として返す
    return response.json();

  })
  .then(data => {
    // 取得したデータを処理
    return  data;
  })
  .catch(error => {
    // エラーハンドリング
    console.error('API取得中にエラーが発生しました:', error);
  });
  return fetchWorkExpAPI2(res)

  }