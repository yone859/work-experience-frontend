import SelfIntro from '@/components/Career/SelfIntro';
import Qualification from '@/components/Career/Qualification';
import { fetchBasicInfoAPI } from '@/lib/getter';

export default async function Name({ children }) {
  let workExp =[];
      try {
          workExp = await fetchBasicInfoAPI(0);

      } catch (error) {
          console.error("Failed to fetch user list:", error);
      }

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
        <div className="mt-10  w-4/5 flex " >
          <SelfIntro SelfIntro={workExp?.self_intro} key={"self_intro"}/>
          <Qualification  Qualification={workExp?.qualis} key={"qualis"}/>
        </div>
    </>
     );
}
