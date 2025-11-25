"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./Account/reducer";
import * as client from "./Account/client";

/**
 * SessionRestoration component
 * Fetches the current user's profile from the server on app initialization
 * This restores the user's session if they reload the browser
 */
export default function SessionRestoration() {
  const dispatch = useDispatch();

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const user = await client.profile();
        if (user) {
          dispatch(setCurrentUser(user));
        }
      } catch (error) {
        // No user logged in, or session expired - this is fine
        console.log("No active session");
      }
    };

    restoreSession();
  }, [dispatch]);

  // This component doesn't render anything
  return null;
}
