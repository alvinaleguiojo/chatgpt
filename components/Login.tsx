"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
      />
      <button onClick={()=> signIn('google')} className="text-white font-bold text-3xl animate-pulse">
        Sign In to use AlvsGPT
      </button>

      <small className="text-white">Powered by AlvsGTP API and developed by Alvs</small>
    </div>
  );
}

export default Login;
