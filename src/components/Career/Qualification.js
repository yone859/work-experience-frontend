// import './globals.css';
import { Inconsolata } from 'next/font/google';
import Loading from '@/app/careertop/loading';
import { Suspense } from 'react'

const fnt = Inconsolata({ subsets: ['latin'] })

export default  function Qualification({ Qualification }) {
  return ( 
    <>
      <div className="ml-7 bg-self-bgcollar w-2/5  pt-4 pb-4 pr-4">
          <div className="text-2xl text-self-table-collar pl-4 font-semibold">
            資格
          </div>
          <div className="pl-8">
            {Qualification?.map((obj,i) => (
              <li  key={i + 1} >{obj.name} ({obj.obtainment_date})</li>
            ))}
          </div>
      </div>
    </>
  );
}