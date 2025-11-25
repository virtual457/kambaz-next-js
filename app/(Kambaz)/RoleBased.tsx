"use client";
import { useSelector } from "react-redux";
import { User } from "../Account/reducer";

interface RoleBasedProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

export default function RoleBased({ children, allowedRoles }: RoleBasedProps) {
  const currentUser = useSelector((state: { accountReducer: { currentUser: User | null } }) => 
    state.accountReducer.currentUser
  );

  if (!currentUser || !currentUser.role) {
    return null;
  }

  if (!allowedRoles.includes(currentUser.role)) {
    return null;
  }

  return <>{children}</>;
}
