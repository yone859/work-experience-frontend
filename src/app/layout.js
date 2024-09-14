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
          <div className="bg-self-bgcollar w-3/5 pt-4 pb-4  pr-4">
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
          <div className="ml-7 bg-self-bgcollar w-2/5  pt-4 pb-4 pr-4">
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

        <div className="mt-10 text-3xl text-black font-semibold flex justify-center w-4/5">
          経  験  業  務
        </div>

        <div className="mt-10  w-4/5">
          <div className="text-black text-xl font-semibold">
          自動車製造会社の車載システムの開発（フルリモート）：7名：2023年8月～2024年3月（8ヵ月）
          </div>
          <div className="flex px-7 py-5 text-black  bg-green border-2 border-lime-500 rounded-3xl z-20">
            <div className="w-2/5">
              <div className="text-dark-green text-sm font-semibold ">開発言語・ツールなど</div>
              <div className="text-sm">
                ・<span className="font-semibold">メイン言語</span>：Java<br/>
                ・<span className="font-semibold">インフラ</span>：AWS（lambda、ECS、SQS、APIgateway、CodeCommit）<br/>
                ・<span className="font-semibold">ＤＢ</span>：AWS(DynamoDB)<br/>
                ・<span className="font-semibold">デプロイ</span>：AWS （CodePipeline、CodeCommit<br/>
                ・<span className="font-semibold">調査ツール</span>：AWS（CloudWatch、Athena）<br/>
                ・<span className="font-semibold">使用OS</span>：Win10、Ubuntu
              </div>
              <div className="text-dark-green text-sm font-semibold mt-5">PJTサポートツール</div>
              <div className="text-sm">
                ・<span className="font-semibold">タスク管理ツール</span>：Jira<br/>
                ・<span className="font-semibold">ドキュメント管理</span>：Confluence<br/>
              </div>
            </div>

            <div className="ml-10 pl-5  border-l-2 border-dark-green w-3/5">
              <div className="text-dark-green text-sm font-semibold ">作業内容</div>
              <div className="text-sm">
                  トヨタの車載システムの保守開発プロジェクトに参画し、設計から試験、本番デプロイまで担当していました。 <br/>
                  <br/>
                  アジャイル開発の中の一つのスクラム開発というやり方で開発を行っていました。 <br/>
                  <br/>
                  GitリポジトリやデプロイToolなど含め、すべての開発リソースがAWSのプロジェクトで、アクセスログやエラーログの管理もAWSで行ってるプロジェクトでした。<br/>
                  <br/>
                  仕様調査や、稼働中システムでエラー発生の際の調査や、デプロイ時に切り戻しするかの判断など、ソースやアクセスログなどを調べて、仕様や状況を整理して報告するといった運用的なタスクも行っていました。 チーム内の朝会、夕会のファシリテートも当番制だったので週１でファシリテートもしていました。

              </div>
              <div className="text-sm  mt-3"><span className="text-dark-green font-semibold">担当工程</span>:基本設計、詳細設計、製造、テスト</div>
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