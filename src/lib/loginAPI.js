export function fetchAuth(form) {
  let fetchResult = ""
  fetch(`http://localhost:3000/login`, {
          cache: 'no-store',
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(form)
        })
  .then((response) => response.json()) // 同様にPromiseを返すためthenする
  .then((data) => {
    console.log(data.message);
    fetchResult = data.message;
  })
  .catch(error => {
    // エラーハンドリング
    console.error('Network error:', error);
    fetchResult = Promise.reject(new Error('Network error occurred'));
  });
  return fetchResult
}