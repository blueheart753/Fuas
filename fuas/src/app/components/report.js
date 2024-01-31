"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Report() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [reporter, setReporter] = useState("");
  const [criminal, setCriminal] = useState("");
  const [report, setReport] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentTimestamp = Math.floor(new Date().getTime() / 1000); 
const formattedTimestamp = new Date(currentTimestamp * 1000).toISOString().slice(0, 19).replace("T", " "); 
    const formData = {
      title : title,
      category: category,
      reporter: reporter,
      criminal: criminal,
      report: report,
      created_at: formattedTimestamp,
    };

    try {
      const response = await fetch("/api/report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Data successfully sent to the server");
        router.push("/studentpage");
      } else {
        console.error("Failed to send data to the server");
      }
    } catch (error) {
      console.error("Error sending data to the server:", error);
    }
  };

  return (
<div className="report_container">
      <div className="report_wrap">
        <form className="report_form" onSubmit={handleSubmit}>
          <div className="info">
            <p>제보자</p>
            <input type="text" onChange={(e) => setReporter(e.target.value)}/>
          </div>
          <div className="info">
            <p>제보할 사람</p>
            <input type="text" onChange={(e) => setCriminal(e.target.value)}/>
          </div>
          <div className="info">
            <p>제목</p>
            <input type="text" onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div className="info">
            <p>카테고리</p>
            <input list="category" onChange={(e) => setCategory(e.target.value)}/>
            <datalist id="category">
              <option value="음식물 반입 및 취식"/>
              <option value="소음공해"/>
              <option value="방해"/>
            </datalist>
          </div>
          <div className="info">
            <p>내용</p>
            <input type="text" onChange={(e) => setReport(e.target.value)}/>
          </div>
          <button type="submit" className="submit">
            제보하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default Report;
