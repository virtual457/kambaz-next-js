"use client";
import { FormControl, FormLabel, FormSelect, FormCheck, Button, Row, Col } from "react-bootstrap";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer";
import { RootState } from "../../../../store";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const dispatch = useDispatch();
  
  const [assignment, setAssignment] = useState<any>({
    _id: "",
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: "",
    course: cid,
  });
  
  useEffect(() => {
    if (aid !== "new") {
      const existingAssignment = assignments.find((a: any) => a._id === aid);
      if (existingAssignment) {
        setAssignment(existingAssignment);
      }
    }
  }, [aid, assignments]);
  
  const handleSave = () => {
    if (aid === "new") {
      dispatch(addAssignment(assignment));
    } else {
      dispatch(updateAssignment(assignment));
    }
    router.push(`/Courses/${cid}/Assignments`);
  };
  
  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };
  
  return (
    <div id="wd-assignments-editor" className="p-3">
      <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
      <FormControl 
        id="wd-name" 
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        className="mb-3" />

      <FormLabel htmlFor="wd-description">Description</FormLabel>
      <FormControl 
        as="textarea"
        id="wd-description"
        rows={5}
        value={assignment.description}
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
        className="mb-3" />

      <Row className="mb-3">
        <Col md={3}>
          <FormLabel htmlFor="wd-points">Points</FormLabel>
        </Col>
        <Col md={9}>
          <FormControl 
            id="wd-points" 
            type="number" 
            value={assignment.points}
            onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3}>
          <FormLabel htmlFor="wd-group">Assignment Group</FormLabel>
        </Col>
        <Col md={9}>
          <FormSelect id="wd-group" defaultValue="ASSIGNMENTS">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
          </FormSelect>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3}>
          <FormLabel htmlFor="wd-display-grade-as">Display Grade as</FormLabel>
        </Col>
        <Col md={9}>
          <FormSelect id="wd-display-grade-as" defaultValue="Percentage">
            <option value="Percentage">Percentage</option>
            <option value="Points">Points</option>
          </FormSelect>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3}>
          <FormLabel htmlFor="wd-submission-type">Submission Type</FormLabel>
        </Col>
        <Col md={9}>
          <FormSelect id="wd-submission-type" defaultValue="Online" className="mb-2">
            <option value="Online">Online</option>
            <option value="Paper">Paper</option>
          </FormSelect>
          
          <div className="border p-3">
            <div className="fw-bold mb-2">Online Entry Options</div>
            <FormCheck type="checkbox" id="wd-text-entry" label="Text Entry" defaultChecked />
            <FormCheck type="checkbox" id="wd-website-url" label="Website URL" />
            <FormCheck type="checkbox" id="wd-media-recordings" label="Media Recordings" />
            <FormCheck type="checkbox" id="wd-student-annotation" label="Student Annotation" />
            <FormCheck type="checkbox" id="wd-file-upload" label="File Uploads" />
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3}>
          <FormLabel htmlFor="wd-assign-to">Assign</FormLabel>
        </Col>
        <Col md={9}>
          <FormLabel htmlFor="wd-assign-to">Assign to</FormLabel>
          <FormControl id="wd-assign-to" defaultValue="Everyone" className="mb-2" />
          
          <FormLabel htmlFor="wd-due-date">Due</FormLabel>
          <FormControl 
            id="wd-due-date" 
            type="date" 
            value={assignment.dueDate}
            onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
            className="mb-2" />
          
          <Row>
            <Col>
              <FormLabel htmlFor="wd-available-from">Available from</FormLabel>
              <FormControl 
                id="wd-available-from" 
                type="date" 
                value={assignment.availableFromDate}
                onChange={(e) => setAssignment({ ...assignment, availableFromDate: e.target.value })}
              />
            </Col>
            <Col>
              <FormLabel htmlFor="wd-available-until">Until</FormLabel>
              <FormControl 
                id="wd-available-until" 
                type="date" 
                value={assignment.availableUntilDate}
                onChange={(e) => setAssignment({ ...assignment, availableUntilDate: e.target.value })}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <hr />
      <div className="float-end">
        <Button variant="secondary" className="me-2" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
}
