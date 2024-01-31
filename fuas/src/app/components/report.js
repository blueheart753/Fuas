"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function report() {
  const [id, setId] = useState("");
  const [category, setCategory] = useState("");
  const [reporter, setReporter] = useState("");
  const [criminal, setCriminal] = useState("");
  const [report, setReport] = useState("");
  const [created_at, setCreated_at] = useState("");
  const router = useRouter();

  const handleSubmit = async (e)=> {
    e.preventDefalut();

    const formData = {
      id: id+1,
      category: category,
      reporter: reporter,
      criminal: criminal,
      report: report,
      created_at: created_at,
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
        router.push("/studentpage")
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
        <form className="report_form">
          <div className="info">
            <p>제보자</p>
            <input type="text" />
          </div>
          <div className="info">
            <p>제보할 사람</p>
            <input type="text"/>
          </div>
          <div className="info">
            <p>제목</p>
            <input type="text" />
          </div>
          <div className="info">
            <p>카테고리</p>
            <input list="category" />
            <datalist id="category">
              <option value="음식물 반입 및 취식"/>
              <option value="소음공해"/>
              <option value="방해"/>
            </datalist>
          </div>
          <div className="info">
            <p>내용</p>
            <input type="text" />
          </div>
          <button type="submit" className="submit">제보하기</button>
        </form>
      </div>
    </div>
  );
  }


export default report;
