"use client";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ courseName }: { courseName: string }) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const section = pathSegments[pathSegments.length - 1];
  
  return (
    <h2 className="text-danger">
      {courseName} &gt; {section}
    </h2>
  );
}