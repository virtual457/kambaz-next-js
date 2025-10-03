"use client";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function KambazNavigation() {
  const pathname = usePathname();
  console.log(pathname.includes("Account"));
  const links = [
    { label: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Dashboard", icon: LiaBookSolid },
    { label: "Calendar", path: "/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

  return (
    <ListGroup 
      id="wd-kambaz-navigation" 
      style={{ width: 100 }}
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      
      <ListGroupItem 
        className="bg-black border-0 text-center" 
        as="a"
        target="_blank" 
        href="https://www.northeastern.edu/" 
        id="wd-neu-link">
        <img src="/images/NEU.png" width="50px" alt="NEU" />
      </ListGroupItem>
      <br />

      <ListGroupItem className={`border-0 text-center ${pathname.includes("Account") ? "bg-white" : "bg-black"}`}>
        <Link 
          href="/Account" 
          id="wd-account-link" 
          className={`text-decoration-none ${
            pathname.includes("Account") ? "text-danger" : "text-white"
          }`}>
          <FaRegCircleUser className={`fs-1 ${
            pathname.includes("Account") ? "text-danger" : "text-white"
          }`} />
          <br />
          Account
        </Link>
      </ListGroupItem>
      <br />

      {links.map((link) => (
        <>
          <ListGroupItem 
            key={link.path}
            as={Link}
            href={link.path}
            className={`border-0 text-center ${
              pathname.includes(link.label) ? "bg-white" : "bg-black"
            }`}>
            {link.icon({ className: "fs-1 text-danger" })}
            <br />
            <span className={pathname.includes(link.label) ? "text-danger" : "text-white"}>
              {link.label}
            </span>
          </ListGroupItem>
          <br />
        </>
      ))}
    </ListGroup>
  );
}