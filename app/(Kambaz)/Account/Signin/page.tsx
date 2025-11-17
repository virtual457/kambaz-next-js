"use client";
import Link from "next/link";
import { FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import * as client from "../client";

export default function Signin() {
  const [credentials, setCredentials] = useState<{
    username?: string;
    password?: string;
  }>({});
  const dispatch = useDispatch();
  const router = useRouter();
  
  const signin = async () => {
    try {
      const user = await client.signin(credentials);
      dispatch(setCurrentUser(user));
      router.push("/Dashboard");
    } catch (error) {
      console.error("Signin error:", error);
      alert("Invalid credentials");
    }
  };
  
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <FormControl 
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        id="wd-username"
        placeholder="username"
        className="mb-2" />
      <FormControl 
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        id="wd-password"
        placeholder="password" 
        type="password"
        className="mb-2" />
      <Button 
        onClick={signin}
        variant="primary" 
        className="w-100 mb-2" 
        id="wd-signin-btn">
        Sign in
      </Button>
      <Link href="/Account/Signup" id="wd-signup-link">Sign up</Link>
    </div>
  );
}
