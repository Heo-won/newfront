import React, { useEffect, useState } from "react";
import { useEventsContext } from "../hooks/useEventsContext";
import EventRep from "./EventRep";
export default function Practice() {
  const { events, dispatch } = useEventsContext();

  useEffect(() => {
    // api from backend
    const fetchEvents = async () => {
      // fetch 함수 default가 get방식임
      const response = await fetch("/api/events");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_EVENTS", payload: json });
      }
    };
    fetchEvents();
  }, [dispatch]);
  return (
    <>
      <h1>연습장</h1>
      {events && events.map((event) => <EventRep event={event}></EventRep>)}
    </>
  );
}
