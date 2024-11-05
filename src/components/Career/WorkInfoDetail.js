"use client";

import WorkInfo from '@/components/Career/WorkInfo';
import { React, useEffect, useState } from 'react';
import { fetchWorkExpAPI } from '@/lib/getter';

export default function WorkInfoDetail() {

  const [workExp, setWorkExp]  = useState(null);
  const [careerList, setCareerList]  = useState(null);
  const [careerListLength, setCareerListLength]  = useState(0);
  const [isNoMoreCareer, setIsNoMoreCareer]  = useState(true);

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
    workExp.career.length==0? setIsNoMoreCareer(true) : setIsNoMoreCareer(false);    
  };

  return (
    <>
      <div className="mt-10 text-3xl text-black font-semibold flex justify-center w-4/5">
        経  験  業  務
      </div>

      <WorkInfo careerList={careerList} key={"career"}/>

      {!isNoMoreCareer
        ?<button className={`p-2 rounded-full mt-5 mb-10 text-2xl text-black border-2 font-semibold w-4/5`}
          onClick={getMoreCareerList}>さらに読み込む...</button>
        :null
      }
   </>
  );
}
