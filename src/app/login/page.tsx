"use client";
import Container from "@/components/Container";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // const data = axios({
    //   url: "/login",
    //   method: "POST",
    //   data: {
    //     username: user,
    //     password: password,
    //   },
    // });
    const response = {
      token: "sgfasdfsos2s57drgdrdfgdfgdf",
      expire: 7,
    };

    Cookies.set("token", response.token, { expires: response.expire });
    redirect("/dashboard");
  };

  return (
    <Container>
      <div className="flex rounded justify-center my-20 mx-auto flex-col [&>*]:focus:outline-none [&>*]:border [&>*]:rounded [&>*]:py-2 [&>*]:my-2 [&>*]:text-center items-center border shadow-inner w-72 h-96">
        <input
          onChange={(e) => setUser(e.target.value)}
          type="text"
          className="focus:outline-none"
          placeholder="username"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          className="focus:outline-none"
          placeholder="password"
        />
        <button
          onClick={handleLogin}
          className="w-48 hover:bg-blue-500 hover:text-white"
        >
          ورود
        </button>
      </div>
    </Container>
  );
}
