"use client";

import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { dataAtom } from '@/store/dataAtom';

export const useFetchData = () => {
  const setData = useSetRecoilState(dataAtom);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:3000/top`);
        const result = await res.json();
        const self_intro = result[0].self_intro;
        setData(self_intro);  // データをRecoilのatomに保存
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setData]);
};