"use client";
import Link from "next/link";
import { FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import * as db from "../../Database";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();
  
  const signin = () => {
    const user = db.users.find(
      (u: any) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (!user) return;
    dispatch(setCurrentUser(user));
    router.push("/Dashboard");
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
