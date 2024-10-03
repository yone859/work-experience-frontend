"use client";
import { Label, TextInput, Select, Textarea, Checkbox,  } from "flowbite-react";
import { useState } from 'react';
import RegisterForm from '@/components/Career/registerForm';
import { fetchCreateCareer } from '@/lib/registerCareerAPI';


export default  function Layout({children}) {

  const [form, setForm] = useState("");
  // ↑親コンポーネントで使う：formの初期値とformを更新する関数を宣言
  // ↓子コンポーネントから受け取った値で親コンポーネントのformを更新する関数A
  const handleFormChange = (newForm) => {
    setForm(newForm);
  };

  const register = async () => {
    try {
      const workExp = await fetchCreateCareer(form);
      setWorkExp(workExp);
      setCareerList(workExp.career);
      setCareerListLength(workExp.career.length);
      workExp.career.length==0? setIsNoMoreCareer(true) : setIsNoMoreCareer(false);

  } catch (error) {
      console.error("Failed to fetch user list:", error);
  }
  };

  return (
    <>
      <div>
        {/* <button type="button" onClick={show}>送信</button> */}
        <form className="w-3/5 mx-auto">
        <RegisterForm handleFormChange={handleFormChange} />
          <button type="button" onClick={register}>登録</button>
        </form>
      </div>
{children}
    </>
  );
}