"use client";
import React, { useEffect, useState } from "react";
import styles from "../page.module.css";
import ActionBar from "../components/actionBar";
import RemainingNumberofPeople from "../components/Remaining_number_of_people";
import UserData from "../components/UserData";
import Button from "../components/moveBtn";
import MoveSection from "../components/moveSections";
import "../static/student.css";

export default function Home() {
  const [totalCount, setTotalCount] = useState(0);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countResponse = await fetch("/api/count");
        const countData = await countResponse.json();
        setTotalCount(countData);

        const userResponse = await fetch("/api/userData");
        const userData = await userResponse.json();
        setUserData(userData);
      } catch (error) {
        console.error("데이터를 가져오는 도중 오류 발생:", error);
      }
    };

    if (userData.length === 0) {
      fetchData();
    }
  }, [userData]);

  const formatTime = (timeString) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString("ko", { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className={styles.main}>
      <ActionBar pageTitle="신청방" backUrl="/selectPosition" />
      <RemainingNumberofPeople remainingNumber={totalCount} />
      <MoveSection />
      {userData.map((user) => (
        <UserData
          key={user.id}
          student_id={user.student_id}
          student_name={user.student_name}
          reservation={user.reservation}
          start_time={formatTime(user.start_time)}
          end_time={formatTime(user.end_time)}
        />
      ))}
      <Button buttonClass="reservationStart" targetUrl="/reservation" buttonName="신청하기" />
    </div>
  );
}