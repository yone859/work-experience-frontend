import { Inconsolata } from 'next/font/google';

const fnt = Inconsolata({ subsets: ['latin'] })

export default  function Name({ children }) {
    return ( 
        <>
    <div className="mt-10 pl-10 pb-7 w-4/5 pt-10 bg-name-bgcollar text-name-collar font-semibold flex place-items-center" >
          <div >
            <div className="text-2xl ">
              よねたに　ともひこ
            </div>
            <div className="text-7xl mt-4">
              米谷　智彦
            </div>
          </div>
          <div  className="ml-12">
            <div className="text-3xl ">
              32才 <span className="text-2xl ">（1992年4月生）</span>
            </div>
            <div className="text-3xl mt-4">
              性別：男
            </div>
          </div>
        </div>
    </>
     );
}
