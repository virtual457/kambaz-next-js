"use client";
import Link from "next/link";
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col, FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCourses, addNewCourse, deleteCourse, updateCourse, type Course } from "../Courses/reducer";
import { RootState } from "../store";
import * as coursesClient from "../Courses/client";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);
  
  // Check if user is faculty
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
  
  // Fetch courses and enrolled courses from server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const allCoursesData = await coursesClient.fetchAllCourses();
        dispatch(setCourses(allCoursesData));
        
        if (currentUser) {
          // This route already returns filtered courses for the user
          const userCoursesData = await coursesClient.fetchAllCourses(); // Will be filtered on server later
          setEnrolledCourses(userCoursesData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [currentUser, dispatch]);
  
  // For now, just show all courses since we don't have proper enrollment filtering yet
  const displayedCourses = courses;
  
  const handleEnrollment = async (courseId: string, isEnrolled: boolean) => {
    if (!currentUser) return;
    
    try {
      if (isEnrolled) {
        await coursesClient.unenrollFromCourse(currentUser._id, courseId);
      } else {
        await coursesClient.enrollIntoCourse(currentUser._id, courseId);
      }
      // Refresh enrolled courses
      const userCoursesData = await coursesClient.fetchAllCourses();
      setEnrolledCourses(userCoursesData);
    } catch (error) {
      console.error("Error handling enrollment:", error);
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
      dispatch(addNewCourse(newCourse));
      
      // Reset form
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
      alert("Failed to create course. Check console for details.");
    }
  };
  
  const handleUpdateCourse = async () => {
    try {
      await coursesClient.updateCourse(course);
      dispatch(updateCourse(course));
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
      dispatch(deleteCourse(courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
      alert("Failed to delete course");
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      
      {/* Only FACULTY can add/edit/delete courses */}
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
          {displayedCourses.map((c) => (
            <Col key={c._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link 
                  href={`/Courses/${c._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                  <CardImg variant="top" src={c.image} width="100%" height={160} />
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {c.name}
                    </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {c.description}
                    </CardText>
                    <Button variant="primary">Go</Button>
                    
                    {isFaculty && (
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
          ))}
        </Row>
      </div>
    </div>
  );
}
