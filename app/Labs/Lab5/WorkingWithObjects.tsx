'use client';

import { useState } from 'react';

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: 'NodeJS Assignment',
    description: 'Create a NodeJS server with ExpressJS',
    due: '2021-10-10',
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: 1,
    name: 'NodeJS Module',
    description: 'Learn NodeJS',
    course: 'CS5610',
  });

  return (
    <div id="wd-working-with-objects">
      <h3>Working with Objects</h3>
      
      <h4>Assignment</h4>
      <a
        id="wd-get-assignment"
        className="btn btn-primary me-2"
        href={`${HTTP_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a>
      <a
        id="wd-get-assignment-title"
        className="btn btn-primary me-2"
        href={`${HTTP_SERVER}/lab5/assignment/title`}
      >
        Get Title
      </a>
      
      <input
        className="form-control mb-2 mt-2"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary"
        href={`${HTTP_SERVER}/lab5/assignment/title/${assignment.title}`}
      >
        Update Title
      </a>
      
      <hr />
      
      <h4>Module</h4>
      <a
        id="wd-get-module"
        className="btn btn-success me-2"
        href={`${HTTP_SERVER}/lab5/module`}
      >
        Get Module
      </a>
      <a
        id="wd-get-module-name"
        className="btn btn-success me-2"
        href={`${HTTP_SERVER}/lab5/module/name`}
      >
        Get Module Name
      </a>
      
      <input
        className="form-control mb-2 mt-2"
        value={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <a
        id="wd-update-module-name"
        className="btn btn-success"
        href={`${HTTP_SERVER}/lab5/module/name/${module.name}`}
      >
        Update Module Name
      </a>
    </div>
  );
}
