"use client";

import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (typeof calendar !== "undefined") {
        calendar.schedulingButton.load({
          url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ30iep-OqjhKItcxrXMRUx4YXVYJspEvjBE7AzdwhI32RF4TsiDQMeURfaGCl0qwgahGUsAHfBU?gv=true",
          color: "#039BE5",
          label: "予約を作成",
          target: document.getElementById("calendar-button"),
        });
      }
    };
  }, []);
  return (
    <div>
      <h1>Hello World</h1>
      {/* <!-- Google Calendar Appointment Scheduling begin --> */}
      <iframe 
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ30iep-OqjhKItcxrXMRUx4YXVYJspEvjBE7AzdwhI32RF4TsiDQMeURfaGCl0qwgahGUsAHfBU?gv=true" 
        style={{ border: 0 }}
        width="100%"
        height="600"
      />
      {/* <!-- end Google Calendar Appointment Scheduling --> */}
      <div>
        <h1>Hello World</h1>
      </div>
      {/* Google Calendar Scheduling Button */}
      <div id="calendar-button" />

      {/* スタイリング用CSS */}
      <link
        rel="stylesheet"
        href="https://calendar.google.com/calendar/scheduling-button-script.css"
      />
    </div>
  );
}
