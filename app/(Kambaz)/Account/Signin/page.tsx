/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import * as client from "../client";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();
  
  const signin = async () => {
    const user = await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    router.push("/Dashboard");
  };
  
  return (
    <div id="wd-signin-screen" style={{ maxWidth: "400px" }}>
      <h3>Sign in</h3>
      <FormControl 
        id="wd-username"
        placeholder="username"
        defaultValue={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        className="mb-2" />
      <FormControl 
        id="wd-password"
        placeholder="password" 
        type="password"
        defaultValue={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        className="mb-2" />
      <Button 
        onClick={signin} 
        id="wd-signin-btn" 
        className="w-100">
        Sign in
      </Button>
      <Link id="wd-signup-link" href="/Account/Signup">Sign up</Link>
    </div>
  );
}
