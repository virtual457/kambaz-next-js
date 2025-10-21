"use client";
import { Form, FormControl, FormLabel, FormSelect, FormCheck, Button, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { useParams } from "next/navigation";
import * as db from "../../../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = db.assignments;
  const assignment = assignments.find((assignment: any) => assignment._id === aid);
  
  if (!assignment) {
    return <div>Assignment not found</div>;
  }
  
  return (
    <div id="wd-assignments-editor" className="p-3">
      <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
      <FormControl id="wd-name" defaultValue={assignment.title} className="mb-3" />

      <FormLabel htmlFor="wd-description">Description</FormLabel>
      <FormControl 
        as="textarea"
        id="wd-description"
        rows={5}
        defaultValue={assignment.description}
        className="mb-3" />

      <Row className="mb-3">
        <Col md={3}>
          <FormLabel htmlFor="wd-points">Points</FormLabel>
        </Col>
        <Col md={9}>
          <FormControl id="wd-points" type="number" defaultValue={assignment.points} />
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
            <FormCheck type="checkbox" id="wd-text-entry" label="Text Entry" />
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
            type="datetime-local" 
            defaultValue={assignment.dueDate ? assignment.dueDate.slice(0, 16) : ""} 
            className="mb-2" />
          
          <Row>
            <Col>
              <FormLabel htmlFor="wd-available-from">Available from</FormLabel>
              <FormControl 
                id="wd-available-from" 
                type="datetime-local" 
                defaultValue={assignment.availableFromDate ? assignment.availableFromDate.slice(0, 16) : ""} />
            </Col>
            <Col>
              <FormLabel htmlFor="wd-available-until">Until</FormLabel>
              <FormControl 
                id="wd-available-until" 
                type="datetime-local" 
                defaultValue={assignment.availableUntilDate ? assignment.availableUntilDate.slice(0, 16) : ""} />
            </Col>
          </Row>
        </Col>
      </Row>

      <hr />
      <div className="float-end">
        <Link href={`/Courses/${cid}/Assignments`}>
          <Button variant="secondary" className="me-2">Cancel</Button>
        </Link>
        <Link href={`/Courses/${cid}/Assignments`}>
          <Button variant="danger">Save</Button>
        </Link>
      </div>
    </div>
  );
}