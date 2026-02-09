import React, { useState, useEffect } from "react";
import "./Clock.scss";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Calculate rotation angles
  const secondAngle = seconds * 6; // 360/60 = 6 degrees per second
  const minuteAngle = minutes * 6 + seconds * 0.1; // 6 degrees per minute + smooth transition
  const hourAngle = hours * 30 + minutes * 0.5; // 30 degrees per hour + smooth transition

  return (
    <div className="clock">
      <div className="clock-face">
        {/* Hour markers */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="hour-marker"
            style={{ transform: `rotate(${i * 30}deg)` }}
          >
            <div className="marker-line"></div>
          </div>
        ))}

        {/* Clock hands */}
        <div
          className="hand hour-hand"
          style={{ transform: `rotate(${hourAngle}deg)` }}
        ></div>
        <div
          className="hand minute-hand"
          style={{ transform: `rotate(${minuteAngle}deg)` }}
        ></div>
        <div
          className="hand second-hand"
          style={{ transform: `rotate(${secondAngle}deg)` }}
        ></div>

        {/* Center dot */}
        <div className="center-dot"></div>
      </div>
    </div>
  );
};

export default Clock;
