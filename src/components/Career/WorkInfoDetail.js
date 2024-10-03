"use client";

import SelfIntro from '@/components/Career/SelfIntro';
import Qualification from '@/components/Career/Qualification';
import WorkInfo from '@/components/Career/WorkInfo';

import { React, useEffect, useState, useRef, Suspense } from 'react';
import { fetchWorkExpAPI, fetchWorkExpAPI2 } from '@/lib/getter';


export default function WorkInfoDetail() {

  const [workExp, setWorkExp]  = useState(null);
  const [careerList, setCareerList]  = useState(null);
  const [careerListLength, setCareerListLength]  = useState(0);
  const [isNoMoreCareer, setIsNoMoreCareer]  = useState(true);
  const scrollToRef = useRef(null);

  useEffect(() => {
      const fetchWorkExp = async () => {
        try {
            const workExp = await fetchWorkExpAPI(careerListLength);
            setWorkExp(workExp);
            setCareerList(workExp.career);
            setCareerListLength(workExp.career.length);
            workExp.career.length==0? setIsNoMoreCareer(true) : setIsNoMoreCareer(false);

        } catch (error) {
            console.error("Failed to fetch user list:", error);
        }
    };
    fetchWorkExp();
    }, []);

  async function  getMoreCareerList() {
    const workExp = await fetchWorkExpAPI(careerListLength);
    setCareerList(careerList.concat(workExp.career));
    setCareerListLength(careerListLength + workExp.career.length);
    // scrollToRef.current.scrollIntoView({ behavior: "smooth" }); // スムーズスクロール
    workExp.career.length==0? setIsNoMoreCareer(true) : setIsNoMoreCareer(false);
        
  };
  const aaa=()=>{
if(isNoMoreCareer)return "mt-5"
}
  const scrollToLatest = (behavior = 'smooth') => scrollToRef.current.scrollIntoView({ behavior });

  return (
    <>
      {workExp
      ?<div>
      <div className="mt-10  w-4/5 flex " >
        <SelfIntro SelfIntro={workExp?.self_intro} key={"self_intro"}/>
        <Qualification  Qualification={workExp?.qualis} key={"qualis"}/>
      </div>
      <div className="mt-10 text-3xl text-black font-semibold flex justify-center w-4/5">
        経  験  業  務
      </div></div>
      :null
      }

      <WorkInfo careerList={careerList} key={"career"}/>
      {!isNoMoreCareer
        ?<button className={`p-2 rounded-full mt-5 mb-10 text-2xl text-black border-2 font-semibold  w-4/5 ${aaa}`}
          onClick={getMoreCareerList}>さらに読み込む...</button>
        :null
      }
      <div ref={scrollToRef} >
      </div>
   </>
  );
}
