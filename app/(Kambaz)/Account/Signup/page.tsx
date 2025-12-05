/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, FormSelect, Button } from "react-bootstrap";
import * as client from "../client";

export default function Signup() {
  const [user, setUser] = useState<any>({ 
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    role: "STUDENT"
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  
  const signup = async () => {
    // Basic validation
    if (!user.username || !user.password) {
      setError("Username and password are required");
      return;
    }
    
    try {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      router.push("/Dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Signup failed. Please try again.");
    }
  };
  
  return (
    <div className="wd-signup-screen" style={{ maxWidth: "400px" }}>
      <h1>Sign up</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      
      <FormControl 
        value={user.username} 
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="wd-username mb-2" 
        placeholder="username"
        required />
        
      <FormControl 
        value={user.password} 
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="wd-password mb-2" 
        placeholder="password" 
        type="password"
        required />
        
      <FormControl 
        value={user.firstName} 
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        className="wd-firstname mb-2" 
        placeholder="first name" />
        
      <FormControl 
        value={user.lastName} 
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        className="wd-lastname mb-2" 
        placeholder="last name" />
        
      <FormControl 
        value={user.email} 
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="wd-email mb-2" 
        placeholder="email"
        type="email" />
        
      <FormControl 
        value={user.dob} 
        onChange={(e) => setUser({ ...user, dob: e.target.value })}
        className="wd-dob mb-2" 
        placeholder="date of birth"
        type="date" />
        
      <FormSelect 
        value={user.role || "STUDENT"} 
        onChange={(e) => setUser({ ...user, role: e.target.value })}
        className="wd-role mb-2"
      >
        <option value="STUDENT">Student</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Admin</option>
      </FormSelect>
      
      <Button 
        onClick={signup} 
        className="wd-signup-btn btn btn-primary mb-2 w-100"
        variant="primary">
        Sign up
      </Button>
      <br />
      <Link href="/Account/Signin" className="wd-signin-link">Sign in</Link>
    </div>
  );
}
