"use client";
import Link from "next/link";
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col, FormControl } from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, type Course } from "../Courses/reducer";
import { enrollCourse, unenrollCourse } from "../Enrollments/reducer";
import { RootState } from "../store";

interface CourseWithEnrollment extends Course {
  enrolled?: boolean;
}

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);
  
  const [course, setCourse] = useState<Course>({
    _id: "0",
    name: "New Course",
    number: "NEW-000",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    department: "General",
    credits: 0,
    image: "/images/reactjs.jpg",
    description: "New Description",
  });
  
  // Filter courses based on showAllCourses toggle
  const displayedCourses: CourseWithEnrollment[] = showAllCourses
    ? courses.map((course): CourseWithEnrollment => ({
        ...course,
        enrolled: (enrollments as Enrollment[]).some(
          (e: Enrollment) => e.user === currentUser?._id && e.course === course._id
        ),
      }))
    : courses.filter((course) =>
        (enrollments as Enrollment[]).some(
          (e: Enrollment) => e.user === currentUser?._id && e.course === course._id
        )
      );
  
  const handleEnrollment = (courseId: string, isEnrolled: boolean) => {
    if (!currentUser) return;
    
    if (isEnrolled) {
      dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
    } else {
      dispatch(enrollCourse({ userId: currentUser._id, courseId }));
    }
  };
  
  const handleCourseClick = (event: React.MouseEvent, courseId: string) => {
    if (!showAllCourses) return; // Allow navigation if showing only enrolled courses
    
    const isEnrolled = (enrollments as Enrollment[]).some(
      (e: Enrollment) => e.user === currentUser?._id && e.course === courseId
    );
    
    if (!isEnrolled) {
      event.preventDefault();
      alert("You must enroll in this course to access it.");
    }
  };
  
  const handleAddCourse = () => {
    if (!currentUser) return;
    const newCourseId = new Date().getTime().toString();
    const newCourse = { ...course, _id: newCourseId };
    dispatch(addNewCourse(newCourse));
    // Automatically enroll the creator
    dispatch(enrollCourse({ userId: currentUser._id, courseId: newCourseId }));
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard
        <Button 
          onClick={() => setShowAllCourses(!showAllCourses)}
          className="float-end btn btn-primary">
          {showAllCourses ? "My Courses" : "All Courses"}
        </Button>
      </h1>
      <hr />
      
      <h5>
        New Course
        <Button 
          className="btn btn-primary float-end"
          onClick={handleAddCourse}
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
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  onClick={(e) => handleCourseClick(e, course._id)}>
                  <CardImg variant="top" src={course.image} width="100%" height={160} />
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description}
                    </CardText>
                    <Button variant="primary">Go</Button>
                    
                    {showAllCourses && (
                      <Button
                        variant={course.enrolled ? "danger" : "success"}
                        className="float-end"
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          handleEnrollment(course._id, course.enrolled);
                        }}>
                        {course.enrolled ? "Unenroll" : "Enroll"}
                      </Button>
                    )}
                    
                    {!showAllCourses && (
                      <>
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
                      </>
                    )}
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
