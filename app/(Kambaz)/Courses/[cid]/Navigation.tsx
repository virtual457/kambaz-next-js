"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation() {
  const pathname = usePathname();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <>
          <Link 
            key={link}
            href={`/Courses/1234/${link == "People"? "People/Table" : link}`}
            id={`wd-course-${link.toLowerCase()}-link`}
            className={`list-group-item border-0 ${
              pathname.includes(link) ? "active" : "text-danger"
            }`}>
            {link}
          </Link>
          <br />
        </>
      ))}
    </div>
  );
}