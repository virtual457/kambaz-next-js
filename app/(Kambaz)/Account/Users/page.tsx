"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import PeopleTable from "../../Courses/[cid]/People/Table";
import * as client from "../client";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const { uid } = useParams();
  
  const createUser = async () => {
    const user = await client.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@neu.edu`,
      section: "S101",
      role: "STUDENT",
    });
    setUsers([...users, user]);
  };
  
  const filterUsersByRole = async (selectedRole: string) => {
    setRole(selectedRole);
    if (selectedRole) {
      const filteredUsers = await client.findUsersByRole(selectedRole);
      setUsers(filteredUsers);
    } else {
      fetchUsers();
    }
  };
  
  const filterUsersByName = async (searchName: string) => {
    if (searchName) {
      const filteredUsers = await client.findUsersByPartialName(searchName);
      setUsers(filteredUsers);
    } else {
      fetchUsers();
    }
  };
  
  const fetchUsers = async () => {
    const allUsers = await client.findAllUsers();
    setUsers(allUsers);
  };
  
  useEffect(() => {
    fetchUsers();
  }, [uid]);
  
  return (
    <div>
      <h3>Users</h3>
      <button onClick={createUser} className="float-end btn btn-danger wd-add-people">
        <FaPlus className="me-2" />
        People
      </button>
      <FormControl 
        onChange={(e) => filterUsersByName(e.target.value)} 
        placeholder="Search people"
        className="float-start w-25 me-2 wd-filter-by-name"
      />
      <select 
        value={role} 
        onChange={(e) => filterUsersByRole(e.target.value)}
        className="form-select float-start w-25 wd-select-role"
      >
        <option value="">All Roles</option>
        <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Administrators</option>
      </select>
      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}
