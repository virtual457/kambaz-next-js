import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs" className="container mt-4">
      <h1>Lab Assignments</h1>
      <hr />
      
      <div className="mb-4">
        <h3>Student Information</h3>
        <p><strong>Name:</strong> Chandan Gowda Keelara Shivanna</p>
        <p><strong>Section:</strong> CS 5610 Section 02</p>
      </div>
      
      <hr />
      
      <div className="mb-4">
        <h3>Lab Assignments</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <Link href="/Labs/Lab1" id="wd-lab1-link" className="text-decoration-none">
              Lab 1: HTML Examples
            </Link>
          </li>
          <li className="list-group-item">
            <Link href="/Labs/Lab2" id="wd-lab2-link" className="text-decoration-none">
              Lab 2: CSS Basics & Bootstrap
            </Link>
          </li>
          <li className="list-group-item">
            <Link href="/Labs/Lab3" id="wd-lab3-link" className="text-decoration-none">
              Lab 3: JavaScript Fundamentals
            </Link>
          </li>
          <li className="list-group-item">
            <Link href="/Labs/Lab4" id="wd-lab4-link" className="text-decoration-none">
              Lab 4: State Management with Redux
            </Link>
          </li>
          <li className="list-group-item">
            <Link href="/Labs/Lab5" id="wd-lab5-link" className="text-decoration-none">
              Lab 5: RESTful Web APIs with Node.js & Express
            </Link>
          </li>
        </ul>
      </div>
      
      <hr />
      
      <div className="mb-4">
        <h3>Kambaz Application</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <Link href="/" id="wd-kambaz-link" className="text-decoration-none">
              Kambaz Learning Management System
            </Link>
          </li>
        </ul>
      </div>
      
      <hr />
      
      <div className="mb-4">
        <h3>Source Code Repositories</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <Link 
              href="https://github.com/virtual457/kambaz-next-js" 
              id="wd-github-frontend"
              className="text-decoration-none"
              target="_blank">
              GitHub Repository - Frontend (Next.js React)
            </Link>
          </li>
          <li className="list-group-item">
            <Link 
              href="https://github.com/virtual457/kambaz-node-server-app" 
              id="wd-github-backend"
              className="text-decoration-none"
              target="_blank">
              GitHub Repository - Backend (Node.js Express)
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
