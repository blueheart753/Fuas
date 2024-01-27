import React, { useState } from "react";

function UserInfo() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !id || !startTime || !endTime) {
      setErrorMessage("정보를 모두 입력해주세요");
      return;
    }

    const formData = {
      student_name: name,
      student_id: id,
      reservation: true,
      start_time: startTime,
      end_time: endTime,
    };

    try {
      const response = await fetch("/api/insertUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Data successfully sent to the server");
        location.href = "/studentpage";
      } else {
        console.error("Failed to send data to the server");
      }
    } catch (error) {
      console.error("Error sending data to the server:", error);
    }
  };

  return (
    <div className="user_info_container">
      <div className="user_info_wrap">
        <form className="userInfo" onSubmit={handleSubmit}>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <p className="infoName">인적사항</p>
          <span>이름</span>
          <input type="text" placeholder="Ex) 김OO" maxLength="10" minLength="2" value={name} onChange={(e) => setName(e.target.value)} />
          <span>학번</span>
          <input type="text" placeholder="Ex) 20001" pattern="[0-9]+" minLength={5} maxLength={5} value={id} onChange={(e) => setId(e.target.value)} />
          <p className="infoName">시간</p>
          <span>시작 시간</span>
          <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
          <span>종료 시간</span>
          <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
          <button type="submit" className="submit">
            신청하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserInfo;
