"use client";
import Link from "next/link";
import { FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import * as client from "../client";

interface NewUser {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  role: string;
}

export default function Signup() {
  const [user, setUser] = useState<NewUser>({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    role: "STUDENT",
  });
  const [verifyPassword, setVerifyPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  
  const signup = async () => {
    if (user.password !== verifyPassword) {
      alert("Passwords do not match");
      return;
    }
    
    try {
      const newUser = await client.signup(user);
      dispatch(setCurrentUser(newUser));
      router.push("/Dashboard");
    } catch (error: unknown) {
      console.error("Signup error:", error);
      if (error && typeof error === 'object' && 'response' in error) {
        const axiosError = error as { response?: { data?: { message?: string } } };
        alert(axiosError.response?.data?.message || "Signup failed");
      } else {
        alert("Signup failed");
      }
    }
  };
  
  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <FormControl 
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username" 
        className="mb-2" />
      <FormControl 
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password" 
        type="password" 
        className="mb-2" />
      <FormControl 
        value={verifyPassword}
        onChange={(e) => setVerifyPassword(e.target.value)}
        placeholder="verify password" 
        type="password" 
        className="mb-2" />
      <FormControl 
        value={user.firstName}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        placeholder="first name" 
        className="mb-2" />
      <FormControl 
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        placeholder="last name" 
        className="mb-2" />
      <FormControl 
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email" 
        type="email"
        className="mb-2" />
      <FormControl 
        value={user.dob}
        onChange={(e) => setUser({ ...user, dob: e.target.value })}
        placeholder="date of birth" 
        type="date"
        className="mb-2" />
      <Button 
        onClick={signup}
        variant="primary" 
        className="w-100 mb-2">
        Sign up
      </Button>
      <Link href="/Account/Signin">Sign in</Link>
    </div>
  );
}
