"use client";
// import { Suspense } from 'react'
// import Loading from './loading';

import Name from '@/components/Career/Name';
import Footer from '@/components/Footer';

import WorkInfoDetail from '@/components/Career/WorkInfoDetail';
import Loading from './loading';

import { React, useEffect, useState, useRef, Suspense } from 'react';
import { fetchWorkExpAPI, fetchWorkExpAPI2 } from '@/lib/getter';

export default function Home() {
  return (
    <>
      <Name />
        <Suspense fallback={<Loading/>}>
          <WorkInfoDetail />
        </Suspense>
      <Footer/>
   </>
  );
}
