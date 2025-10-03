import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz">
      <div className="d-flex">
        <div>
          <AccountNavigation />
        </div>
        <div className="flex-fill d-flex justify-content-left align-items-top">
          {children}
        </div>
      </div>
    </div>
  );
}