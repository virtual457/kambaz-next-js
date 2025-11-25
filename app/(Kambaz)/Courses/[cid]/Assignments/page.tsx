"use client";
import { FaCaretDown, FaPlus, FaTrash } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { MdEditDocument } from "react-icons/md";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { setAssignments, deleteAssignment } from "./reducer";
import { RootState } from "../../../store";
import { useEffect } from "react";
import * as assignmentsClient from "./client";
import RoleBased from "../../../RoleBased";

export default function Assignments() {
  const { cid } = useParams();
  const router = useRouter();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const currentUser = useSelector((state: RootState) => state.accountReducer.currentUser);
  const dispatch = useDispatch();
  
  // Fetch assignments from server
  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const assignmentsData = await assignmentsClient.fetchAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignmentsData));
      } catch (error) {
        console.error("Error fetching assignments:", error);
      }
    };
    fetchAssignments();
  }, [cid, dispatch]);
  
  const handleDeleteAssignment = async (assignmentId: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      try {
        await assignmentsClient.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
      } catch (error) {
        console.error("Error deleting assignment:", error);
        alert("Failed to delete assignment");
      }
    }
  };
  
  const handleEditAssignment = (assignmentId: string) => {
    router.push(`/Courses/${cid}/Assignments/${assignmentId}`);
  };
  
  const isFacultyOrAdmin = currentUser?.role === 'FACULTY' || currentUser?.role === 'ADMIN';
  
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
        
        {/* Only FACULTY and ADMIN can see add buttons */}
        <RoleBased allowedRoles={['FACULTY', 'ADMIN']}>
          <div>
            <Button variant="secondary" className="me-2" id="wd-add-assignment-group">
              <FaPlus className="me-1" /> Group
            </Button>
            <Button 
              variant="danger" 
              id="wd-add-assignment"
              onClick={() => router.push(`/Courses/${cid}/Assignments/new`)}>
              <FaPlus className="me-1" /> Assignment
            </Button>
          </div>
        </RoleBased>
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
          .filter((assignment) => assignment.course === cid)
          .map((assignment) => (
            <ListGroupItem key={assignment._id} className="wd-assignment-list-item border-bottom border-end border-secondary position-relative ps-1">
              <div className="position-absolute top-0 bottom-0 start-0 border-start border-success border-5"></div>
              <div className="d-flex justify-content-between align-items-center ms-0">
                <div className="d-flex align-items-start">
                  <BsGripVertical className="fs-3 mt-3" />
                  
                  {/* Only FACULTY and ADMIN can see edit icon */}
                  <RoleBased allowedRoles={['FACULTY', 'ADMIN']}>
                    <MdEditDocument 
                      className="fs-3 mt-3 me-3 text-success" 
                      onClick={() => handleEditAssignment(assignment._id)}
                      style={{ cursor: 'pointer' }}
                      title="Edit Assignment"
                    />
                  </RoleBased>
                  
                  <div>
                    <div 
                      className="wd-assignment-link text-dark fw-bold"
                      style={{ cursor: isFacultyOrAdmin ? 'pointer' : 'default' }}
                      onClick={() => isFacultyOrAdmin && handleEditAssignment(assignment._id)}>
                      {assignment.title}
                    </div>
                    <div className="small text-muted">
                      <span className="text-danger">Multiple Modules</span> | 
                      <strong> Not available until</strong> {assignment.availableFromDate} at 12:00am |
                      <br />
                      <strong>Due</strong> {assignment.dueDate} at 11:59pm | {assignment.points} pts
                    </div>
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  {/* Only FACULTY and ADMIN can see delete icon */}
                  <RoleBased allowedRoles={['FACULTY', 'ADMIN']}>
                    <FaTrash 
                      className="text-danger me-2 mb-1" 
                      onClick={() => handleDeleteAssignment(assignment._id)}
                      style={{ cursor: 'pointer' }}
                      title="Delete Assignment"
                    />
                  </RoleBased>
                  
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
