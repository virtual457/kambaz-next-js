import Link from "next/link";
import { FormControl, Button } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <FormControl 
        placeholder="username" 
        className="mb-2" />
      <FormControl 
        placeholder="password" 
        type="password" 
        className="mb-2" />
      <FormControl 
        placeholder="verify password" 
        type="password" 
        className="mb-2" />
      <Link href="/Account/Profile">
        <Button variant="primary" className="w-100 mb-2">Sign up</Button>
      </Link>
      <Link href="/Account/Signin">Sign in</Link>
    </div>
  );
}