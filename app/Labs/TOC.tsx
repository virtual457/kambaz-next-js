"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TOC() {
  const pathname = usePathname();
  
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link 
          href="/Labs" 
          className={`nav-link ${pathname === "/Labs" ? "active" : ""}`}
          id="wd-home-link">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link 
          href="/Labs/Lab1" 
          className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}
          id="wd-lab1-link">
          Lab 1
        </Link>
      </li>
      <li className="nav-item">
        <Link 
          href="/Labs/Lab2" 
          className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}
          id="wd-lab2-link">
          Lab 2
        </Link>
      </li>
      <li className="nav-item">
        <Link 
          href="/Labs/Lab3" 
          className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}
          id="wd-lab3-link">
          Lab 3
        </Link>
      </li>
      <li className="nav-item">
        <Link 
          href="/" 
          className="nav-link"
          id="wd-kambaz-link">
          Kambaz
        </Link>
      </li>
      <li className="nav-item">
        <Link 
          href="https://github.com/virtual457/kambaz-next-js" 
          className="nav-link"
          target="_blank"
          id="wd-github">
          My GitHub
        </Link>
      </li>
    </ul>
  );
}