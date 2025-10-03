import Link from "next/link";
import { FormControl, FormSelect, Button } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <FormControl 
        id="wd-username"
        defaultValue="alice" 
        placeholder="username"
        className="mb-2" />
      <FormControl 
        id="wd-password"
        defaultValue="123" 
        placeholder="password" 
        type="password"
        className="mb-2" />
      <FormControl 
        id="wd-firstname"
        defaultValue="Alice" 
        placeholder="First Name"
        className="mb-2" />
      <FormControl 
        id="wd-lastname"
        defaultValue="Wonderland" 
        placeholder="Last Name"
        className="mb-2" />
      <FormControl 
        id="wd-dob"
        defaultValue="2000-01-01" 
        type="date"
        className="mb-2" />
      <FormControl 
        id="wd-email"
        defaultValue="alice@wonderland" 
        type="email"
        className="mb-2" />
      <FormSelect id="wd-role" defaultValue="USER" className="mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </FormSelect>
      <Link href="/Account/Signin">
        <Button variant="danger" className="w-100">Sign out</Button>
      </Link>
    </div>
  );
}