"use client";
import React, { useState } from "react";
import styles from "../page.module.css";
import ActionBar from "../components/actionBar";
import UserInfo from "../components/userInfo";
import "../static/reservation.css";

export default function Reservation() {
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch("/api/insertUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        console.log("Data successfully sent to the server");
      } else {
        setSubmitStatus("error");
        console.error("Failed to send data to the server");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error sending data to the server:", error);
    }
  };

  return (
    <div className={styles.main}>
      <ActionBar pageTitle="인공지능융합실 신청서" backUrl="/studentpage" />
      <UserInfo onSubmit={handleSubmit} />
      {submitStatus === "success" && <p>Data successfully submitted!</p>}
      {submitStatus === "error" && <p>Failed to submit data. Please try again.</p>}
    </div>
  );
}
