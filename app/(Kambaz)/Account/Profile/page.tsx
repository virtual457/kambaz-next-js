"use client";
import { FormControl, FormSelect, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { RootState } from "../../store";
import * as client from "../client";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  
  const fetchProfile = async () => {
    if (!currentUser) {
      router.push("/Account/Signin");
      return;
    }
    setProfile(currentUser);
  };
  
  const updateProfile = async () => {
    try {
      await client.updateUser(profile);
      dispatch(setCurrentUser(profile));
      alert("Profile updated successfully");
    } catch (error) {
      console.error("Update profile error:", error);
      alert("Failed to update profile");
    }
  };
  
  const signout = async () => {
    try {
      await client.signout();
      dispatch(setCurrentUser(null));
      router.push("/Account/Signin");
    } catch (error) {
      console.error("Signout error:", error);
    }
  };
  
  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      {profile && (
        <div>
          <FormControl 
            id="wd-username"
            value={profile.username || ""}
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
            placeholder="username"
            className="mb-2" />
          <FormControl 
            id="wd-password"
            value={profile.password || ""}
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
            placeholder="password" 
            type="password"
            className="mb-2" />
          <FormControl 
            id="wd-firstname"
            value={profile.firstName || ""}
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
            placeholder="First Name"
            className="mb-2" />
          <FormControl 
            id="wd-lastname"
            value={profile.lastName || ""}
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
            placeholder="Last Name"
            className="mb-2" />
          <FormControl 
            id="wd-dob"
            value={profile.dob || ""}
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
            type="date"
            className="mb-2" />
          <FormControl 
            id="wd-email"
            value={profile.email || ""}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            type="email"
            className="mb-2" />
          <FormSelect 
            id="wd-role" 
            value={profile.role || "STUDENT"}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            className="mb-2">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </FormSelect>
          <Button 
            onClick={updateProfile}
            variant="primary" 
            className="w-100 mb-2"
            id="wd-update-profile-btn">
            Update Profile
          </Button>
          <Button 
            onClick={signout}
            variant="danger" 
            className="w-100 mb-2"
            id="wd-signout-btn">
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
}
