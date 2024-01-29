import React from "react";

function userData(props) {
  const { student_name, student_id, start_time, end_time, isUse } = props;

  return (
    <div className="student_container">
      <div className="student_wrap">
        <div>
          <p>{student_id}</p>
          <p>{student_name}</p>
        </div>
        <p>{isUse}</p>
        <p className="setTimeView">
          {start_time} ~ {end_time}
        </p>
      </div>
    </div>
  );
}

export default userData;