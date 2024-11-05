// import './globals.css';
export default  function Qualification({ Qualification }) {

  function parseCustomDate(dateStr) {
    // "yyyy年mm月dd日" の形式から "yyyy-mm-dd" 形式に変換
    const formattedDateStr = dateStr.replace(/年|月/g, '-').replace(/日/g, '');
    return new Date(formattedDateStr);
}

function getYearMonth(dateStr) {
    // 日付文字列をDateオブジェクトに変換
    const date = parseCustomDate(dateStr);
  
    // 年と月をそれぞれ取得
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth()は0-11の範囲を返す
  
    // トータルの月数の差を返す(開始月も期間に含めるため１加える)
    return year + '年' + month + '月' 
  }
  return ( 
    <>
      <div className="ml-7 bg-self-bgcollar w-2/5  pt-4 pb-4 pr-4">
          <div className="text-2xl text-self-table-collar pl-4 font-semibold">
            資格
          </div>
          <div className="pl-8">
            {Qualification?.map((obj,i) => (
              <li  key={i + 1} >{obj.name} ({getYearMonth(obj.obtainment_date)})</li>
            ))}
          </div>
      </div>
    </>
  );
}