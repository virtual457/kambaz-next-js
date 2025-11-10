"use client";
import Link from "next/link";
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col, FormControl } from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, setCourses } from "../Courses/reducer";
import { RootState } from "../store";
import * as db from "../Database";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const dispatch = useDispatch();
  
  // We'll handle enrollments later - for now just show all courses when logged in
  const displayedCourses = currentUser ? courses : [];
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      
      <h5>
        New Course
        <Button 
          className="btn btn-primary float-end"
          onClick={() => dispatch(addNewCourse(course))}
          id="wd-add-new-course-click">
          Add
        </Button>
        <Button 
          className="btn btn-warning float-end me-2"
          onClick={() => dispatch(updateCourse(course))}
          id="wd-update-course-click">
          Update
        </Button>
      </h5>
      <br />
      
      <FormControl 
        value={course.name}
        className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl 
        value={course.description}
        as="textarea"
        rows={3}
        className="mb-2"
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />
      
      <h2 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((course) => (
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
                    <Button 
                      variant="danger"
                      className="float-end"
                      onClick={(event) => {
                        event.preventDefault();
                        dispatch(deleteCourse(course._id));
                      }}
                      id="wd-delete-course-click">
                      Delete
                    </Button>
                    <Button 
                      variant="warning"
                      className="float-end me-2"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      id="wd-edit-course-click">
                      Edit
                    </Button>
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