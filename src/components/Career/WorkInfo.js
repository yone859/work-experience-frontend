"use client";
import { Inconsolata } from 'next/font/google';
import { useEffect, useState } from 'react';
import React from 'react';

export default  function WorkInfo({ careerList }) {
    return ( 
        <>
        {careerList?.map((obj,i) => (
            <React.Fragment key={obj.project_no}>
                <div key={obj.project_no}>
                    <div className="mt-10  w-4/5">
                    <div className="text-black text-xl font-semibold">
                    {obj.project_title}：{obj.member_headcount}名：{obj.participate_date}～{obj.leave_date}（8ヵ月）
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
                        <div className="text-sm">
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
