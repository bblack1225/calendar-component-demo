import { useState } from "react";
import "./App.css";

const Calendar = () => {
  const date = new Date();
  const [currentYear, setCurrentYear] = useState(date.getFullYear()); // [1
  const [currentMonth, setCurrentMonth] = useState(date.getMonth());

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const lastDayOfLastMonth = getDaysInMonth(currentMonth - 1, currentYear);
  const daysOfLastMonth = Array.from(
    { length: firstDayOfMonth },
    (_, i) => lastDayOfLastMonth - i
  ).reverse();
  const daysOfNextMonth = Array.from(
    { length: 42 - daysInMonth - firstDayOfMonth },
    (_, i) => i + 1
  );

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleLastMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <div>
        <span>{currentYear}</span>
        <button onClick={handleLastMonth}>last</button>
        <button onClick={handleNextMonth}>next</button>
        <span>{currentMonth + 1}</span>
      </div>
      <div className="weekdays">
        <div className="weekday">Sunday</div>
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
      </div>
      <div className="calendar">
        {daysOfLastMonth.map((day) => (
          <div key={day} className="dayContainer other-month ">
            <div className="day">{day}</div>
          </div>
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
          <div key={day} className="dayContainer">
            <div className="day">{day}</div>
            {day === 1 && <div className="taskConatiner">aaa</div>}
          </div>
        ))}
        {daysOfNextMonth.map((day) => (
          <div key={day} className="dayContainer other-month">
            <div className="day">{day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
