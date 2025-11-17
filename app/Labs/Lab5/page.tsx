'use client';

import PathParameters from './PathParameters';
import QueryParameters from './QueryParameters';
import WorkingWithObjects from './WorkingWithObjects';
import WorkingWithArrays from './WorkingWithArrays';

export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <div className="list-group">
        <a href="#path-parameters" className="list-group-item">
          Path Parameters
        </a>
        <a href="#query-parameters" className="list-group-item">
          Query Parameters
        </a>
        <a href="#working-with-objects" className="list-group-item">
          Working with Objects
        </a>
        <a href="#working-with-arrays" className="list-group-item">
          Working with Arrays
        </a>
      </div>
      <hr />
      <PathParameters />
      <hr />
      <QueryParameters />
      <hr />
      <WorkingWithObjects />
      <hr />
      <WorkingWithArrays />
    </div>
  );
}
