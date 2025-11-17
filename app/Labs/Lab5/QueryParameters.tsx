'use client';

import { useState } from 'react';

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function QueryParameters() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);

  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <input
        type="number"
        className="form-control mb-2"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
      />
      <input
        type="number"
        className="form-control mb-2"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
      />
      
      <a
        id="wd-query-parameter-add"
        className="btn btn-primary me-2"
        href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
      >
        Add {a} + {b}
      </a>
      
      <a
        id="wd-query-parameter-subtract"
        className="btn btn-danger me-2"
        href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
      >
        Subtract {a} - {b}
      </a>
      
      <a
        id="wd-query-parameter-multiply"
        className="btn btn-success me-2"
        href={`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
      >
        Multiply {a} * {b}
      </a>
      
      <a
        id="wd-query-parameter-divide"
        className="btn btn-warning"
        href={`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
      >
        Divide {a} / {b}
      </a>
    </div>
  );
}
