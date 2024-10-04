"use client";

import React from 'react';

export default  function WorkInfo({ careerList }) {

    function parseCustomDate(dateStr) {
        // "yyyy年mm月dd日" の形式から "yyyy-mm-dd" 形式に変換
        const formattedDateStr = dateStr.replace(/年|月/g, '-').replace(/日/g, '');
        return new Date(formattedDateStr);
    }

    function getMonthDifference(date1Str, date2Str) {
        // 日付文字列をDateオブジェクトに変換
        const date1 = parseCustomDate(date1Str);
        const date2 = parseCustomDate(date2Str);
      
        // 年と月をそれぞれ取得
        const year1 = date1.getFullYear();
        const month1 = date1.getMonth(); // getMonth()は0-11の範囲を返す
      
        const year2 = date2.getFullYear();
        const month2 = date2.getMonth();
      
        // 月の差を計算
        const yearDiff = year2 - year1;
        const monthDiff = month2 - month1;
      
        // トータルの月数の差を返す(開始月も期間に含めるため１加える)
        return yearDiff * 12 + monthDiff + 1;
      }

    return ( 
        <>
        {careerList?.map((obj,i) => (
            <React.Fragment key={obj.project_no}>
                <div key={obj.project_no} className="ml-2">
                    <div className="mt-10  w-4/5">
                    <div className="text-black text-xl font-semibold">
                    {obj.project_title}： {obj.member_headcount}名 ：{obj.participate_date} ～ {obj.leave_date}（{getMonthDifference(obj.participate_date, obj.leave_date)}カ月）
                    </div>
                    <div className="flex px-7 py-5 text-black  bg-green border-2 border-lime-500 rounded-3xl z-20">
                    <div className="w-2/5">
                        <div className="text-dark-green text-sm font-semibold ">開発言語・ツールなど</div>
                        <div className="text-sm">
                        <li ><span className="font-semibold">メイン言語</span>：{obj.program_language} </li>
                        {obj.dev_tool.map((obj,i) => (
                        <li key={i + 1} ><span className="font-semibold">{Object.keys(obj)}</span>：{Object.values(obj)} </li>
                        ))}
                        </div>
                        <div className="text-dark-green text-sm font-semibold mt-5">PJTサポートツール</div>
                        <div className="text-sm">
                        {obj.pjt_support_tool.map((obj,i) => (
                        <li key={i + 1} ><span className="font-semibold">{Object.keys(obj)}</span>：{Object.values(obj)} </li>
                        ))}
                        </div>
                    </div>

                    <div className="ml-10 pl-5  border-l-2 border-dark-green w-3/5">
                        <div className="text-dark-green text-sm font-semibold ">作業内容</div>
                        <div className="text-sm  whitespace-pre-wrap">
                        {obj.pjt_content}
                        </div>
                        <div className="text-sm  mt-3"><span className="text-dark-green font-semibold">担当工程</span>：{obj.work_kind}</div>
                    </div>
                    </div>
                    </div>
                </div>
            </React.Fragment>
        ))}
    </>
    );
}
