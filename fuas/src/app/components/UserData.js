import React from "react";

function userData(props) {
  const { student_name, student_id, start_time, end_time, isUse } = props;

  return (
    <div className="student_container">
      <div className="student_wrap">
        <span>{student_id}</span>
        <span>{student_name}</span>
        <span>{isUse}</span>
        <span>
          {start_time} ~ {end_time}
        </span>
      </div>
    </div>
  );
}

export default userData;
