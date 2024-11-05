export function createBook(book) {
  const authors = book.volumeInfo.authors;
  const price = book.saleInfo.listPrice;
  const img = book.volumeInfo.imageLinks;
  return {
    self_intro: book.self_intro,
    title: book.volumeInfo.title,
    author: authors ? authors.join(',') : '',
    price: price ? price.amount : 0,
    publisher: book.volumeInfo.publisher,
    published: book.volumeInfo.publishedDate,
    image: img ? img.smallThumbnail : '/vercel.svg',
  };
}

export function createQuali(record) {
  return {
    name: record.name,
    obtainment_date: record.obtainment_date,
  };
}

export function createCareer(record) {
  const dev_tool = [];
  const pjt_support_tool = [];
  const dev_tool_mst = ["インフラ","DB","フレームワーク","デプロイ","調査ツール","使用OS","デザインツール"];
  const pjt_support_tool_mst = ["タスク管理ツール","ドキュメント管理"];
 
  for (const [key, val] of Object.entries(record)) {
    if (dev_tool_mst.includes(key) > 0) {
      dev_tool.push({[key]: val});
    }
  }
  for (const [key, val] of Object.entries(record)) {
    if (pjt_support_tool_mst.includes(key) > 0) {
      pjt_support_tool.push({[key]: val});
    }
  }

  return {
    leave_date: record.leave_date,
    participate_date: record.participate_date,
    member_headcount: record.member_headcount,
    pjt_content: record.pjt_content,
    program_language: record.program_language,
    project_no: record.project_no,
    project_title: record.project_title,
    work_kind: record.work_kind,
    project_no: record.project_no,
    dev_tool: dev_tool,
    pjt_support_tool: pjt_support_tool
  };
}
export async  function fetchWorkExpAPI(careerListLength=0) {
    
  const res = await fetch(
    `http://${process.env.NEXT_PUBLIC_API_HOST_NAME}/top?current_record=${careerListLength+1}&next_fetch_record=${careerListLength+3}`, {
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

  const career = [];

  for (const record of res.work_experience) {
    career.push(createCareer(record));
  }

  return {
    career: career
  };
}


export async  function fetchBasicInfoAPI(careerListLength=0) {
    
  const res = await fetch(
    `http://${process.env.NEXT_PUBLIC_API_HOST_NAME}/get-basic-info`, {
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

  const self_intro = res[0].self_intro;
  const qualis = [];

  for (const record of res[1].quali) {
    qualis.push(createQuali(record));
  }

  return {
    self_intro: self_intro,
    qualis: qualis,
  };

}