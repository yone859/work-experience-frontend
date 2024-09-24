"use client";
// import { Suspense } from 'react'
// import Loading from './loading';

import Name from '@/components/Career/Name';
import SelfIntro from '@/components/Career/SelfIntro';
import Qualification from '@/components/Career/Qualification';
import WorkInfo from '@/components/Career/WorkInfo';

import { React, useEffect, useState } from 'react';
import { fetchWorkExpAPI } from '@/lib/getter';

export default function Home() {

  const [workExp, setWorkExp]  = useState(null);
  const [careerList, setCareerList]  = useState(null);
  const [careerListLength, setCareerListLength]  = useState(0);

  useEffect(() => {
      const fetchWorkExp = async () => {
        try {
            const workExp = await fetchWorkExpAPI(careerListLength);

            setWorkExp(workExp);
            setCareerList(workExp.career);
            setCareerListLength(workExp.career.length);
        } catch (error) {
            console.error("Failed to fetch user list:", error);
        }
    };
    fetchWorkExp();
    }, []);

  async function  getMoreCareerList() {
    const workExp = await fetchWeather(careerListLength);
    setCareerList(careerList.concat(workExp.career));
  };

  return (
    <>
      <Name />
      {/* <Suspense fallback={<Loading />}> */}
        <div className="mt-10  w-4/5 flex " >
          <SelfIntro SelfIntro={workExp?.self_intro} key={"self_intro"}/>
          <Qualification  Qualification={workExp?.qualis} key={"qualis"}/>
        </div>
      {/* </Suspense> */}

      <div className="mt-10 text-3xl text-black font-semibold flex justify-center w-4/5">
        経  験  業  務
      </div>

      <WorkInfo careerList={careerList} key={"career"}/>
      <button onClick={getMoreCareerList}>カウント</button>
   </>
  );
}
