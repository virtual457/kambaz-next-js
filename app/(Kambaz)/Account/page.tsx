"use client";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AccountPage() {
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const router = useRouter();
  
  useEffect(() => {
    if (currentUser) {
      router.push("/Account/Profile");
    } else {
      router.push("/Account/Signin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);
  
  return null;
}
