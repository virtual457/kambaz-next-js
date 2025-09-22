import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/Images/reactjs.jpg" width={200} height={150} alt="React JS Course - Modern JavaScript Library for Building User Interfaces" />
            <div>
              <h5>CS1234 - React JS Fundamentals</h5>
              <p className="wd-dashboard-course-title">
                Learn React.js from scratch - Components, Hooks, and State Management
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link href="/Courses/1235" className="wd-dashboard-course-link">
            <Image src="/Images/nextjs3.png" width={200} height={150} alt="Next.js Course - Full-Stack React Framework for Production" />
            <div>
              <h5>CS1235 - Next.js Full-Stack Development</h5>
              <p className="wd-dashboard-course-title">
                Master Next.js - Server-Side Rendering, API Routes, and Deployment
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link href="/Courses/1236" className="wd-dashboard-course-link">
            <Image src="/Images/Javascript.jpeg" width={200} height={150} alt="JavaScript ES6+ Course - Modern JavaScript Features and Syntax" />
            <div>
              <h5>CS1236 - Advanced JavaScript ES6+</h5>
              <p className="wd-dashboard-course-title">
                Deep dive into modern JavaScript - Async/Await, Promises, and Modules
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link href="/Courses/1237" className="wd-dashboard-course-link">
            <Image src="/Images/Nodejs.jpeg" width={200} height={150} alt="Node.js Course - Server-Side JavaScript Development" />
            <div>
              <h5>CS1237 - Node.js Backend Development</h5>
              <p className="wd-dashboard-course-title">
                Build scalable server applications with Node.js and Express
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link href="/Courses/1238" className="wd-dashboard-course-link">
            <Image src="/Images/typescript.png" width={200} height={150} alt="TypeScript Course - Type-Safe JavaScript Development" />
            <div>
              <h5>CS1238 - TypeScript for Developers</h5>
              <p className="wd-dashboard-course-title">
                Learn TypeScript - Static typing, interfaces, and advanced features
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link href="/Courses/1239" className="wd-dashboard-course-link">
            <Image src="/Images/Mongodb.jpeg" width={200} height={150} alt="MongoDB Course - NoSQL Database Management and Operations" />
            <div>
              <h5>CS1239 - MongoDB Database Design</h5>
              <p className="wd-dashboard-course-title">
                Master MongoDB - Document databases, queries, and data modeling
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link href="/Courses/1240" className="wd-dashboard-course-link">
            <Image src="/Images/css.png" width={200} height={150} alt="CSS3 Course - Modern Styling and Layout Techniques" />
            <div>
              <h5>CS1240 - Advanced CSS3 & Styling</h5>
              <p className="wd-dashboard-course-title">
                Master CSS3 - Flexbox, Grid, animations, and responsive design
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link href="/Courses/1241" className="wd-dashboard-course-link">
            <Image src="/Images/git.png" width={200} height={150} alt="Git & GitHub Course - Version Control and Collaboration" />
            <div>
              <h5>CS1241 - Git & GitHub Mastery</h5>
              <p className="wd-dashboard-course-title">
                Learn version control - Git workflows, branching, and collaboration
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link href="/Courses/1242" className="wd-dashboard-course-link">
            <Image src="/Images/docker.png" width={200} height={150} alt="Docker Course - Containerization and DevOps" />
            <div>
              <h5>CS1242 - Docker & Containerization</h5>
              <p className="wd-dashboard-course-title">
                Containerize applications - Docker, Kubernetes, and deployment
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link href="/Courses/1243" className="wd-dashboard-course-link">
            <Image src="/Images/aws.png" width={200} height={150} alt="AWS Course - Cloud Computing and Services" />
            <div>
              <h5>CS1243 - AWS Cloud Computing</h5>
              <p className="wd-dashboard-course-title">
                Deploy to the cloud - EC2, S3, Lambda, and cloud architecture
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link href="/Courses/1244" className="wd-dashboard-course-link">
            <Image src="/Images/graphql.png" width={200} height={150} alt="GraphQL Course - Modern API Query Language" />
            <div>
              <h5>CS1244 - GraphQL API Development</h5>
              <p className="wd-dashboard-course-title">
                Build efficient APIs - GraphQL schemas, resolvers, and subscriptions
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link href="/Courses/1245" className="wd-dashboard-course-link">
            <Image src="/Images/testing and Qa.jpeg" width={200} height={150} alt="Testing Course - Software Testing and Quality Assurance" />
            <div>
              <h5>CS1245 - Testing & Quality Assurance</h5>
              <p className="wd-dashboard-course-title">
                Master testing - Jest, Cypress, unit tests, and test automation
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}