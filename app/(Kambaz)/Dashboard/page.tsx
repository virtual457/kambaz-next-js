import Link from "next/link";
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col } from "react-bootstrap";

export default function Dashboard() {
  const courses = [
    { _id: "1234", name: "CS1234 - React JS Fundamentals", description: "Learn React.js from scratch - Components, Hooks, and State Management", image: "/Images/reactjs.jpg" },
    { _id: "1235", name: "CS1235 - Next.js Full-Stack Development", description: "Master Next.js - Server-Side Rendering, API Routes, and Deployment", image: "/Images/nextjs3.png" },
    { _id: "1236", name: "CS1236 - Advanced JavaScript ES6+", description: "Deep dive into modern JavaScript - Async/Await, Promises, and Modules", image: "/Images/Javascript.jpeg" },
    { _id: "1237", name: "CS1237 - Node.js Backend Development", description: "Build scalable server applications with Node.js and Express", image: "/Images/Nodejs.jpeg" },
    { _id: "1238", name: "CS1238 - TypeScript for Developers", description: "Learn TypeScript - Static typing, interfaces, and advanced features", image: "/Images/typescript.png" },
    { _id: "1239", name: "CS1239 - MongoDB Database Design", description: "Master MongoDB - Document databases, queries, and data modeling", image: "/Images/Mongodb.jpeg" },
    { _id: "1240", name: "CS1240 - Advanced CSS3 & Styling", description: "Master CSS3 - Flexbox, Grid, animations, and responsive design", image: "/Images/css.png" },
    { _id: "1241", name: "CS1241 - Git & GitHub Mastery", description: "Learn version control - Git workflows, branching, and collaboration", image: "/Images/git.png" },
    { _id: "1242", name: "CS1242 - Docker & Containerization", description: "Containerize applications - Docker, Kubernetes, and deployment", image: "/Images/docker.png" },
    { _id: "1243", name: "CS1243 - AWS Cloud Computing", description: "Deploy to the cloud - EC2, S3, Lambda, and cloud architecture", image: "/Images/aws.png" },
    { _id: "1244", name: "CS1244 - GraphQL API Development", description: "Build efficient APIs - GraphQL schemas, resolvers, and subscriptions", image: "/Images/graphql.png" },
    { _id: "1245", name: "CS1245 - Testing & Quality Assurance", description: "Master testing - Jest, Cypress, unit tests, and test automation", image: "/Images/testing and Qa.jpeg" },
  ];

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link 
                  href={`/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                  <CardImg variant="top" src={course.image} width="100%" height={160} />
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description}
                    </CardText>
                    <Button variant="primary">Go</Button>
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}