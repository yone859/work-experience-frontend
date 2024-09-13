import Link from 'next/link';
import './globals.css';
import { Inconsolata } from 'next/font/google';

const fnt = Inconsolata({ subsets: ['latin'] })

export const metadata = {
  title: 'Reading Recorder',
  description: '自分が読んだ書籍の記録を残すためのアプリ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={fnt.className}>
      <div className="mt-10 pl-10 pb-7 w-4/5 pt-10 bg-name-bgcollar text-name-collar font-semibold flex place-items-center" >
        <div >
          <div className="text-2xl ">
            よねたに　ともひこ
          </div>
          <div className="text-7xl mt-4">
            米谷 智彦
          </div>
        </div>
        <div  className="ml-12">
          <div className="text-3xl ">
          ３２才 <span className="text-2xl ">（１９９２年４月生）</span>
          </div>
          <div className="text-3xl mt-4">
          性別：男
          </div>
        </div>
      </div>

      <div className="mt-10  w-4/5 flex " >
      <div className="bg-self-bgcollar w-1/2 pt-4 pb-4  pr-4">
        <div className="text-2xl text-self-table-collar pl-4 font-semibold">
          自己PR
        </div>
        <div className="pl-8">
        ・不明点や疑問点はまず自分で調べて解決に努め、それでもわからない場合は自己判断せずまわりに協力を仰ぎ、正確さを大事にしてこれまで業務に取り組んできました。<br/>
        ・バックエンド・フロント・インフラなど比較的幅広く何でもできます。<br/>
        ・業務外でも本を買ったりなどして、 AWSを使って一人でネットワークを構築したりしています。 <br/>
        ・学習の記録用として技術ブログも作成しています : https://zenn.dev/yone5<br/>

        </div>
      </div>
      <div className="ml-7 bg-self-bgcollar w-1/2  pt-4 pb-4 pr-4">
        <div className="text-2xl text-self-table-collar pl-4 font-semibold">
        資格
        </div>
        <div className="pl-8">
        ・基本情報技術者試験 （2017年10月）<br/>
        ・Oracle database MASTER Bronze （2018年12月）<br/>
        ・Oracle Java Programmer, Silver（2017年5月）<br/>
        </div>
      </div>
        </div>


      {/* <ul className="flex bg-blue-600 mb-4 pl-2">
        <li className="block px-4 py-2 my-1 hover:bg-gray-100 rounded">
          <Link className="no-underline text-blue-300" href="/">
            Home</Link></li>
        <li className="block text-blue-300 px-4 py-2 my-1 hover:bg-gray-100 rounded">
          <Link className="no-underline text-blue-300" href="/books">
            Search</Link></li>
        <li className="block text-blue-300 px-4 py-2 my-1 hover:bg-gray-100 rounded">
          <a className="no-underline text-blue-300"
            href="https://wings.msn.to/" target="_blank">Support</a></li>
      </ul> */}
      {/* <div className="ml-2">
        {children}
      </div> */}
      </body>
    </html>
  );
}