"use client"
import { useState } from "react";

export default function EventObject() {
  const [event, setEvent] = useState<{
    type: string;
    target: string;
    currentTarget: string;
    clientX: number;
    clientY: number;
    screenX: number;
    screenY: number;
    ctrlKey: boolean;
    shiftKey: boolean;
    altKey: boolean;
  } | null>(null);
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const simpleEvent = {
      type: e.type,
      target: e.target.tagName,
      currentTarget: e.currentTarget.tagName,
      clientX: e.clientX,
      clientY: e.clientY,
      screenX: e.screenX,
      screenY: e.screenY,
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
      altKey: e.altKey,
    };
    setEvent(simpleEvent);
  };
  
  return (
    <div id="wd-event-object">
      <h2>Event Object</h2>
      <button 
        onClick={handleClick}
        className="btn btn-primary"
        id="wd-trigger-event-click">
        Display Event Object
      </button>
      {event && (
        <div className="mt-2">
          <pre>{JSON.stringify(event, null, 2)}</pre>
        </div>
      )}
      <hr/>
    </div>
  );
}
