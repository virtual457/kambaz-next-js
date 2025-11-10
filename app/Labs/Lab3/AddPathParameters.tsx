"use client";
import { useParams } from "next/navigation";

export default function AddPathParameters() {
  const params = useParams();
  const a = params.a as string;
  const b = params.b as string;
  
  return (
    <div id="wd-add">
      <h4>Add Path Parameters</h4>
      {a} + {b} = {parseInt(a) + parseInt(b)}
    </div>
  );
}