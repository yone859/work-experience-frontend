// import './globals.css';
import { Inconsolata } from 'next/font/google';

const fnt = Inconsolata({ subsets: ['latin'] })

export default  function Name({ children }) {



    return ( 
        <>
    <div className="mt-10 pl-10 pb-7 w-4/5 pt-10 bg-name-bgcollar text-name-collar font-semibold flex place-items-center" >
          <div >
            <div className="text-2xl ">
              なまえ
            </div>
            <div className="text-7xl mt-4">
              名前
            </div>
          </div>
          <div  className="ml-12">
            <div className="text-3xl ">
              XX才 <span className="text-2xl ">（XXXX年X月生）</span>
            </div>
            <div className="text-3xl mt-4">
              性別：男
            </div>
          </div>
        </div>
    </>
     );
}
