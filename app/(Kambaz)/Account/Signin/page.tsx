import Link from "next/link";
import { FormControl, Button } from "react-bootstrap";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <FormControl 
        id="wd-username"
        placeholder="username"
        className="mb-2" />
      <FormControl 
        id="wd-password"
        placeholder="password" 
        type="password"
        className="mb-2" />
      <Link href="/Dashboard">
        <Button variant="primary" className="w-100 mb-2" id="wd-signin-btn">
          Sign in
        </Button>
      </Link>
      <Link href="/Account/Signup" id="wd-signup-link">Sign up</Link>
    </div>
  );
}