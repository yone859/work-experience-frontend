// import './globals.css';
import { Inconsolata } from 'next/font/google';
const fnt = Inconsolata({ subsets: ['latin'] })

export default  function SelfIntro({ SelfIntro }) {
  return ( 
    <>
      <div className="bg-self-bgcollar w-3/5 pt-4 pb-4  pr-4">
        <div className="text-2xl text-self-table-collar pl-4 font-semibold">
          自己PR
        </div>
        <div className="pl-8 whitespace-pre-wrap">
          {SelfIntro}
        </div>
      </div>
    </>
  );
}