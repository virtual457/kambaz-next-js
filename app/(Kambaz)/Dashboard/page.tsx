"use client";
import Link from "next/link";
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col, FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCourses, addNewCourse, deleteCourse, updateCourse, type Course } from "../Courses/reducer";
import { setEnrollments, enrollCourse, unenrollCourse, type Enrollment } from "../Enrollments/reducer";
import { RootState } from "../store";
import * as coursesClient from "../Courses/client";
import * as enrollmentsClient from "../Enrollments/client";

interface CourseWithEnrollment extends Course {
  enrolled?: boolean;
}

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const enrollmentsState = useSelector((state: RootState) => state.enrollmentsReducer);
  const enrollments = enrollmentsState.enrollments as Enrollment[];
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
  
  // Fetch courses and enrollments from server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesData = await coursesClient.fetchAllCourses();
        dispatch(setCourses(coursesData));
        
        if (currentUser) {
          const enrollmentsData = await enrollmentsClient.fetchEnrollmentsForUser(currentUser._id);
          dispatch(setEnrollments(enrollmentsData));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [currentUser, dispatch]);
  
  // Filter courses based on showAllCourses toggle
  const displayedCourses: CourseWithEnrollment[] = showAllCourses
    ? courses.map((course): CourseWithEnrollment => ({
        ...course,
        enrolled: enrollments.some(
          (e: Enrollment) => e.user === currentUser?._id && e.course === course._id
        ),
      }))
    : courses.filter((course) =>
        enrollments.some(
          (e: Enrollment) => e.user === currentUser?._id && e.course === course._id
        )
      );
  
  const handleEnrollment = async (courseId: string, isEnrolled: boolean) => {
    if (!currentUser) return;
    
    try {
      if (isEnrolled) {
        await enrollmentsClient.unenrollUserFromCourse(currentUser._id, courseId);
        dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
      } else {
        await enrollmentsClient.enrollUserInCourse(currentUser._id, courseId);
        dispatch(enrollCourse({ userId: currentUser._id, courseId }));
      }
    } catch (error) {
      console.error("Error handling enrollment:", error);
    }
  };
  
  const handleCourseClick = (event: React.MouseEvent, courseId: string) => {
    if (!showAllCourses) return;
    
    const isEnrolled = enrollments.some(
      (e: Enrollment) => e.user === currentUser?._id && e.course === courseId
    );
    
    if (!isEnrolled) {
      event.preventDefault();
      alert("You must enroll in this course to access it.");
    }
  };
  
  const handleAddCourse = async () => {
    if (!currentUser) return;
    try {
      const newCourse = await coursesClient.createCourse(course);
      dispatch(addNewCourse(newCourse));
      await enrollmentsClient.enrollUserInCourse(currentUser._id, newCourse._id);
      dispatch(enrollCourse({ userId: currentUser._id, courseId: newCourse._id }));
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };
  
  const handleUpdateCourse = async () => {
    try {
      await coursesClient.updateCourse(course);
      dispatch(updateCourse(course));
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };
  
  const handleDeleteCourse = async (courseId: string) => {
    try {
      await coursesClient.deleteCourse(courseId);
      dispatch(deleteCourse(courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
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
          onClick={handleUpdateCourse}
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
                          handleEnrollment(course._id, course.enrolled || false);
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
                            handleDeleteCourse(course._id);
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
