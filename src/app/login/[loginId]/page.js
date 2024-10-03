
"use client";

import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { fetchAuth } from '@/lib/loginAPI';
import { useState } from 'react';

export default function Layout({params}) {
  const [form, setForm] = useState({
    login_id: "",
    password: "",
  });

  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
      
    });
  };

  const  login = async () => {
    try {
      const loginRes = await fetchAuth(form);
      console.log("Failed to fetch:");
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  };



  return (
    <>
    <Card className="max-w-sm mx-auto mt-20">
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="login_id" value="Login ID" />
          </div>
          <TextInput id="login_id" name="login_id" type="text" defaultValue={params.loginId} onChange={onChange} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput id="password" name="password" type="password" onChange={onChange} />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit" onClick={login}>Submit</Button>
      </form>
    </Card>
    {/* {children} */}
    </>
  );
}
