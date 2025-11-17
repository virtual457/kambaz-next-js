"use client";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModules, addModule, deleteModule, updateModule, editModule } from "./reducer";
import { RootState } from "../../../store";
import * as modulesClient from "./client";

interface Lesson {
  _id: string;
  name: string;
  description: string;
  module: string;
}

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const dispatch = useDispatch();
  
  // Fetch modules from server
  useEffect(() => {
    const fetchModules = async () => {
      try {
        const modulesData = await modulesClient.fetchModulesForCourse(cid as string);
        dispatch(setModules(modulesData));
      } catch (error) {
        console.error("Error fetching modules:", error);
      }
    };
    fetchModules();
  }, [cid, dispatch]);
  
  const handleAddModule = async () => {
    try {
      const newModule = await modulesClient.createModule(cid as string, { 
        name: moduleName,
        description: "New Module Description"
      });
      dispatch(addModule(newModule));
      setModuleName("");
    } catch (error) {
      console.error("Error creating module:", error);
    }
  };
  
  const handleDeleteModule = async (moduleId: string) => {
    try {
      await modulesClient.deleteModule(moduleId);
      dispatch(deleteModule(moduleId));
    } catch (error) {
      console.error("Error deleting module:", error);
    }
  };
  
  const handleUpdateModule = async (module: any) => {
    try {
      await modulesClient.updateModule(module);
      dispatch(updateModule(module));
    } catch (error) {
      console.error("Error updating module:", error);
    }
  };
  
  return (
    <div>
      <ModulesControls 
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={handleAddModule}
      />
      <br /><br /><br /><br />
      
      <ListGroup className="rounded-0" id="wd-modules">
        {modules
          .filter((module) => module.course === cid)
          .map((module) => (
            <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> 
                {!module.editing && module.name}
                {module.editing && (
                  <FormControl
                    className="w-50 d-inline-block"
                    value={module.name}
                    onChange={(e) =>
                      dispatch(updateModule({ ...module, name: e.target.value }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleUpdateModule({ ...module, editing: false });
                      }
                    }}
                  />
                )}
                <ModuleControlButtons 
                  moduleId={module._id}
                  deleteModule={handleDeleteModule}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
              </div>
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: Lesson) => (
                    <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" /> 
                      {lesson.name}
                      <LessonControlButtons />
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}
