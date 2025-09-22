import Link from "next/link";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input placeholder="username" className="wd-username" defaultValue="newuser" /><br/>
      <input placeholder="password" type="password" className="wd-password" defaultValue="test123" /><br/>
      <input placeholder="verify password" type="password" className="wd-password-verify" defaultValue="test123" /><br/>
      <Link href="Profile" > Sign up </Link><br />
      <Link href="Signin" > Sign in </Link>
    </div>
  );
}