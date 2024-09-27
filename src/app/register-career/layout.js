"use client";
import { Label, TextInput, Select, Textarea, Checkbox,  } from "flowbite-react";
import { useState } from 'react';

export default  function Layout({children}) {
  const [form, setForm] = useState({
    devTool1: "",
    devTool2: "",
    devTool3: "",
    devTool4: "",
    devTool5: "",
    devTool1Name: "",
    devTool2Name: "",
    devTool3Name: "",
    devTool4Name: "",
    devTool5Name: "",
    devSupportTool1: "",
    devSupportTool2: "",
    devSupportTool1Name: "",
    devSupportTool2Name: "",
    projectTitle: "",
    memberHeadcount: "",
    pjtContent: "",
    workKind: [],
    participateDate: "",
    leaveDate:""
  });

  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
      
    });
  };

  const handleFormMulti = e => {
    const formWorkKind = form.workKind;
    if (e.target.checked) {
      formWorkKind.push(e.target.value);
    } else {
      formWorkKind.splice(formWorkKind.indexOf(e.target.value), 1);
    }
    setForm({
      ...form,
      [e.target.name]: formWorkKind
    });
  };

  // const show = () => {
  //   console.log(`devTool1 ${form.devTool1}`);
  // };

  return (
    <>
      <div>
        <button type="button" onClick={show}>送信</button>
        <form className="w-3/5 mx-auto">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="aaa" value="案件タイトル" />
            </div>
            <TextInput value={form.projectTitle} onChange={onChange}
                  id="projectTitle" 
                  name="projectTitle" type="text" sizing="md" />
          </div>

          {/* 案件参画～案件離任　年月 */}
          <div className="block">
              <Label htmlFor="small" value="案件参画～案件離任　年月" />
            </div>
          <div className="w-4/5 flex " >
            <TextInput value={form.participateDate} onChange={onChange}
                  id="participateDate" 
                  name="participateDate" type="text" sizing="md" 
                  className="w-1/2  pt-1 pb-1 pr-4"/>
            <TextInput value={form.leaveDate} onChange={onChange}
                  id="leaveDate" 
                  name="leaveDate" type="text" sizing="md" 
                  className="w-1/2  pt-1 pb-1 pr-4"/>
          </div>

          <div>
            <div className="block">
                <Label htmlFor="small" value="開発言語ツールなど" />
              </div>
            <div>
              <div className="mt-1  w-4/5 flex " >
                <div className="mr-1 w-1/3">
                  <Select id="devTool1" name="devTool1"
                    value={form.devTool1}
                    onChange={onChange}>
                    <option value=''>指定なし</option>                    
                    <option value="インフラ">インフラ</option>
                    <option value="DB">DB</option>
                    <option value="デプロイ">デプロイ</option>
                    <option value="調査ツール">調査ツール</option>
                    <option value="使用OS">使用OS</option>
                  </Select>
                </div>
                <div className="w-2/3">
                  <TextInput value={form.devTool1Name} onChange={onChange}
                  id="devTool1Name" 
                  name="devTool1Name" type="text" sizing="md" />
                </div>
              </div>
              <div className="mt-1  w-4/5 flex " >
                <div className="mr-1 w-1/3">
                  <Select id="devTool2" name="devTool2"
                    value={form.devTool2}
                    onChange={onChange}>
                    <option value=''>指定なし</option>                    
                    <option value="インフラ">インフラ</option>
                    <option value="DB">DB</option>
                    <option value="デプロイ">デプロイ</option>
                    <option value="調査ツール">調査ツール</option>
                    <option value="使用OS">使用OS</option>
                  </Select>
                </div>
                <div className="w-2/3">
                  <TextInput value={form.devTool2Name} onChange={onChange}
                  id="devTool2Name" 
                  name="devTool2Name" type="text" sizing="md" />
                </div>
              </div>
              <div className="mt-1  w-4/5 flex " >
                <div className="mr-1 w-1/3">
                  <Select id="devTool3" name="devTool3"
                    value={form.devTool3}
                    onChange={onChange}>
                    <option value=''>指定なし</option>                    
                    <option value="インフラ">インフラ</option>
                    <option value="DB">DB</option>
                    <option value="デプロイ">デプロイ</option>
                    <option value="調査ツール">調査ツール</option>
                    <option value="使用OS">使用OS</option>
                  </Select>
                </div>
                <div className="w-2/3">
                  <TextInput value={form.devTool3Name} onChange={onChange}
                  id="devTool3Name" 
                  name="devTool3Name" type="text" sizing="md" />
                </div>
              </div>
              <div className="mt-1  w-4/5 flex " >
                <div className="mr-1 w-1/3">
                  <Select id="devTool4" name="devTool4"
                    value={form.devTool4}
                    onChange={onChange}>
                    <option value=''>指定なし</option>                    
                    <option value="インフラ">インフラ</option>
                    <option value="DB">DB</option>
                    <option value="デプロイ">デプロイ</option>
                    <option value="調査ツール">調査ツール</option>
                    <option value="使用OS">使用OS</option>
                  </Select>
                </div>
                <div className="w-2/3">
                <TextInput value={form.devTool4Name} onChange={onChange}
                  id="devTool4Name" 
                  name="devTool4Name" type="text" sizing="md" />
                </div>
              </div>
            </div>

            <div className="mt-1  w-4/5 flex " >
              <div className="mr-1 w-1/3">
                <Select id="devTool5" name="devTool5"
                  value={form.devTool5}
                  onChange={onChange}>
                  <option value=''>指定なし</option>                    
                  <option value="インフラ">インフラ</option>
                  <option value="DB">DB</option>
                  <option value="デプロイ">デプロイ</option>
                  <option value="調査ツール">調査ツール</option>
                  <option value="使用OS">使用OS</option>
                </Select>
              </div>
              <div className="w-2/3">
                <TextInput value={form.devTool5Name} onChange={onChange}
                  id="devTool5Name" 
                  name="devTool5Name" type="text" sizing="md" />
              </div>
            </div>
          </div>

          {/* PJTサポートツール */}
          <div>
            <div className="block">
                <Label htmlFor="small" value="PJTサポートツール" />
            </div>
            <div>
              <div className="mt-1  w-4/5 flex " >
                <div className="mr-1 w-1/3">
                  <Select id="devSupportTool1" name="devSupportTool1"
                    value={form.devSupportTool1}
                    onChange={onChange}>
                    <option value=''>指定なし</option>                    
                    <option value="タスク管理ツール">タスク管理ツール</option>
                    <option value="ドキュメント管理">ドキュメント管理</option>
                  </Select>
                </div>
                <div className="w-2/3">
                <TextInput value={form.devSupportTool1Name} onChange={onChange}
                  id="devSupportTool1Name" 
                  name="devSupportTool1Name" type="text" sizing="md" />
                </div>
              </div>
              <div className="mt-1  w-4/5 flex " >
                <div className="mr-1 w-1/3">
                  <Select id="devSupportTool2" name="devSupportTool2"
                    value={form.devSupportTool2}
                    onChange={onChange}>
                    <option value=''>指定なし</option>                    
                    <option value="タスク管理ツール">タスク管理ツール</option>
                    <option value="ドキュメント管理">ドキュメント管理</option>
                  </Select>
                </div>
                <div className="w-2/3">
                <TextInput value={form.devSupportTool2Name} onChange={onChange}
                  id="devSupportTool2Name" 
                  name="devSupportTool2Name" type="text" sizing="md" />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="案件概要" />
            </div>
            <Textarea value={form.pjtContent} onChange={onChange}
                  id="pjtContent"  required rows={5}
                  name="pjtContent" type="text" />
          </div>


          <div className="block">
              <Label htmlFor="small" value="担当工程" />
          </div>
          <div className="flex max-w-md flex-col gap-2" id="checkbox">
            <div className="flex items-center gap-2">
              <Checkbox id="workKind_yoken" value="workKind_yoken"  name="workKind" onChange={handleFormMulti}/>
              <Label htmlFor="workKind_yoken" className="flex">要件定義</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="workKind_kihon" value="workKind_kihon" name="workKind" onChange={handleFormMulti}/>
              <Label htmlFor="workKind_kihon">基本設計</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="workKind_syosai" value="workKind_syosai" name="workKind" onChange={handleFormMulti}/>
              <Label htmlFor="workKind_syosai">詳細設計</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="workKind_seizo" value="workKind_seizo" name="workKind" onChange={handleFormMulti}/>
              <Label htmlFor="workKind_seizo">製造</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="workKind_test" value="workKind_test" name="workKind" onChange={handleFormMulti}/>
              <Label htmlFor="workKind_test">テスト</Label>
            </div>
          </div>

          <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="PJT人数" />
              </div>
              <TextInput value={form.memberHeadcount} onChange={onChange}
                  id="memberHeadcount" className="w-1/5"
                  name="memberHeadcount" type="text" sizing="md" />
          </div>
        </form>
      </div>
{children}
    </>
  );
}