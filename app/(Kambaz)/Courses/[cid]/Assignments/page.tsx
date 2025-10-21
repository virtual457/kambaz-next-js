"use client";
import Link from "next/link";
import { FaCaretDown, FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { MdEditDocument } from "react-icons/md";
import { useParams } from "next/navigation";
import * as db from "../../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  
  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-50">
          <span className="input-group-text bg-white">
            <FaSearch />
          </span>
          <input
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="form-control" />
        </div>
        <div>
          <Button variant="secondary" className="me-2" id="wd-add-assignment-group">
            <FaPlus className="me-1" /> Group
          </Button>
          <Button variant="danger" id="wd-add-assignment">
            <FaPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>

      <div className="p-3 bg-secondary d-flex justify-content-between align-items-center">
        <h3 id="wd-assignments-title" className="mb-0">
          <BsGripVertical className="me-2 fs-3" />
          <FaCaretDown className="me-1 fs-5" />
          ASSIGNMENTS
        </h3>
        <div>
          <span className="rounded-pill bg-secondary text-dark px-3 py-1 border border-dark">40% of Total</span>
          <span className="me-1 ms-2 border-0 fs-4">+</span>
          <IoEllipsisVertical className="fs-4 mb-2" />
        </div>
      </div>

      <ListGroup className="rounded-0">
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <ListGroupItem key={assignment._id} className="wd-assignment-list-item border-bottom border-end border-secondary position-relative ps-1">
              <div className="position-absolute top-0 bottom-0 start-0 border-start border-success border-5"></div>
              <div className="d-flex justify-content-between align-items-center ms-0">
                <div className="d-flex align-items-start">
                  <BsGripVertical className="fs-3 mt-3" />
                  <MdEditDocument className="fs-3 mt-3 me-3 text-success" />
                  <div>
                    <Link
                      href={`/Courses/${cid}/Assignments/${assignment._id}`}
                      className="wd-assignment-link text-decoration-none text-dark fw-bold">
                      {assignment.title}
                    </Link>
                    <div className="small text-muted">
                      <span className="text-danger">Multiple Modules</span> | 
                      <strong> Not available until</strong> {new Date(assignment.availableFromDate).toLocaleDateString()} at 12:00am |
                      <br />
                      <strong>Due</strong> {new Date(assignment.dueDate).toLocaleDateString()} at 11:59pm | {assignment.points} pts
                    </div>
                  </div>
                </div>
                <div>
                  <GreenCheckmark />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}