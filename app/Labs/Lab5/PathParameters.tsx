'use client';

import { useState } from 'react';

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function PathParameters() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);

  return (
    <div id="wd-path-parameters">
      <h3>Path Parameters</h3>
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
        id="wd-path-parameter-add"
        className="btn btn-primary me-2"
        href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}
      >
        Add {a} + {b}
      </a>
      
      <a
        id="wd-path-parameter-subtract"
        className="btn btn-danger me-2"
        href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}
      >
        Subtract {a} - {b}
      </a>
      
      <a
        id="wd-path-parameter-multiply"
        className="btn btn-success me-2"
        href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}
      >
        Multiply {a} * {b}
      </a>
      
      <a
        id="wd-path-parameter-divide"
        className="btn btn-warning"
        href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}
      >
        Divide {a} / {b}
      </a>
    </div>
  );
}
