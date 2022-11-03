import { useEventsContext } from "../hooks/useEventsContext";
import React from "react";

export default function EventRep({ event }) {
  const { dispatch } = useEventsContext();
  return (
    <>
      <div>{event.brandname}</div>
      <div>{event.title}</div>
      <div>{event.content}</div>
      <div>{event.eventImage}</div>
    </>
  );
}
