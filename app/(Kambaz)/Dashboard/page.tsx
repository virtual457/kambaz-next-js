"use client";
import Link from "next/link";
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col, FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import * as coursesClient from "../Courses/client";

interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  description: string;
  image?: string;
}

interface CourseWithEnrollment extends Course {
  enrolled?: boolean;
}

export default function Dashboard() {
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const isFaculty = currentUser?.role === "FACULTY";
  
  const [course, setCourse] = useState<Course>({
    _id: "0",
    name: "New Course",
    number: "NEW-000",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    department: "General",
    credits: 3,
    image: "/Images/reactjs.jpg",
    description: "New Description",
  });
  
  // Fetch courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Fetch all courses
        const allCoursesData = await coursesClient.fetchAllCourses();
        setAllCourses(allCoursesData);
        
        // Fetch enrolled courses for current user
        if (currentUser) {
          const enrolledCoursesData = await coursesClient.fetchCoursesForCurrentUser();
          setEnrolledCourses(enrolledCoursesData);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, [currentUser]);
  
  // Determine which courses to display
  const displayedCourses: CourseWithEnrollment[] = showAllCourses
    ? allCourses.map((course) => ({
        ...course,
        enrolled: enrolledCourses.some((ec) => ec._id === course._id),
      }))
    : enrolledCourses;
  
  const handleEnrollment = async (courseId: string, isEnrolled: boolean) => {
    if (!currentUser) {
      alert("Please sign in to enroll");
      return;
    }
    
    try {
      if (isEnrolled) {
        await coursesClient.unenrollFromCourse(currentUser._id, courseId);
        setEnrolledCourses(enrolledCourses.filter((c) => c._id !== courseId));
      } else {
        await coursesClient.enrollIntoCourse(currentUser._id, courseId);
        // Refresh enrolled courses
        const enrolledCoursesData = await coursesClient.fetchCoursesForCurrentUser();
        setEnrolledCourses(enrolledCoursesData);
      }
    } catch (error) {
      console.error("Error handling enrollment:", error);
      alert("Enrollment action failed. You may already be enrolled.");
    }
  };
  
  const handleCourseClick = (event: React.MouseEvent, courseId: string, isEnrolled: boolean) => {
    if (showAllCourses && !isEnrolled) {
      event.preventDefault();
      alert("You must enroll in this course to access it.");
    }
  };
  
  const handleAddCourse = async () => {
    if (!currentUser) {
      alert("Please sign in to create a course");
      return;
    }
    try {
      const newCourseData = {
        ...course,
        _id: undefined,
        image: course.image || "/Images/reactjs.jpg",
      };
      
      const newCourse = await coursesClient.createCourse(newCourseData);
      setAllCourses([...allCourses, newCourse]);
      setEnrolledCourses([...enrolledCourses, newCourse]);
      
      setCourse({
        _id: "0",
        name: "New Course",
        number: "NEW-000",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        department: "General",
        credits: 3,
        image: "/Images/reactjs.jpg",
        description: "New Description",
      });
      
      alert("Course created successfully!");
    } catch (error) {
      console.error("Error creating course:", error);
      alert("Failed to create course");
    }
  };
  
  const handleUpdateCourse = async () => {
    try {
      await coursesClient.updateCourse(course);
      setAllCourses(allCourses.map((c) => (c._id === course._id ? course : c)));
      setEnrolledCourses(enrolledCourses.map((c) => (c._id === course._id ? course : c)));
      alert("Course updated successfully!");
    } catch (error) {
      console.error("Error updating course:", error);
      alert("Failed to update course");
    }
  };
  
  const handleDeleteCourse = async (courseId: string) => {
    if (!confirm("Are you sure you want to delete this course?")) return;
    
    try {
      await coursesClient.deleteCourse(courseId);
      setAllCourses(allCourses.filter((c) => c._id !== courseId));
      setEnrolledCourses(enrolledCourses.filter((c) => c._id !== courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
      alert("Failed to delete course");
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
      
      {isFaculty && (
        <>
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
            placeholder="Course Name"
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl 
            value={course.number}
            placeholder="Course Number"
            className="mb-2"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <FormControl 
            value={course.description}
            placeholder="Course Description"
            as="textarea"
            rows={3}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </>
      )}
      
      <h2 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((c) => {
            const courseEnrolled = 'enrolled' in c ? c.enrolled : true;
            return (
              <Col key={c._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Link 
                    href={`/Courses/${c._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                    onClick={(e) => handleCourseClick(e, c._id, courseEnrolled)}>
                    <CardImg variant="top" src={c.image} width="100%" height={160} />
                    <CardBody>
                      <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {c.name}
                      </CardTitle>
                      <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                        {c.description}
                      </CardText>
                      <Button variant="primary">Go</Button>
                      
                      {showAllCourses && (
                        <Button
                          variant={courseEnrolled ? "danger" : "success"}
                          className="float-end"
                          onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            handleEnrollment(c._id, courseEnrolled);
                          }}>
                          {courseEnrolled ? "Unenroll" : "Enroll"}
                        </Button>
                      )}
                      
                      {!showAllCourses && isFaculty && (
                        <>
                          <Button 
                            variant="danger"
                            className="float-end"
                            onClick={(event) => {
                              event.preventDefault();
                              handleDeleteCourse(c._id);
                            }}
                            id="wd-delete-course-click">
                            Delete
                          </Button>
                          <Button 
                            variant="warning"
                            className="float-end me-2"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(c);
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
            );
          })}
        </Row>
      </div>
    </div>
  );
}
