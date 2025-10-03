import { Form, FormControl, FormLabel, FormSelect, FormCheck, Button, Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-3">
      <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
      <FormControl id="wd-name" defaultValue="A1 - ENV + HTML" className="mb-3" />

      <FormLabel htmlFor="wd-description">Description</FormLabel>
      <FormControl 
        as="textarea"
        id="wd-description"
        rows={5}
        defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify."
        className="mb-3" />

      <Row className="mb-3">
        <Col md={3}>
          <FormLabel htmlFor="wd-points">Points</FormLabel>
        </Col>
        <Col md={9}>
          <FormControl id="wd-points" type="number" defaultValue={100} />
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
          <FormControl id="wd-due-date" type="date" defaultValue="2024-05-13" className="mb-2" />
          
          <Row>
            <Col>
              <FormLabel htmlFor="wd-available-from">Available from</FormLabel>
              <FormControl id="wd-available-from" type="date" defaultValue="2024-05-06" />
            </Col>
            <Col>
              <FormLabel htmlFor="wd-available-until">Until</FormLabel>
              <FormControl id="wd-available-until" type="date" defaultValue="2024-05-20" />
            </Col>
          </Row>
        </Col>
      </Row>

      <hr />
      <div className="float-end">
        <Link href="/Courses/1234/Assignments">
          <Button variant="secondary" className="me-2">Cancel</Button>
        </Link>
        <Link href="/Courses/1234/Assignments">
          <Button variant="danger">Save</Button>
        </Link>
      </div>
    </div>
  );
}