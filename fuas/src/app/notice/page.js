"use client";
import React, { useEffect, useState } from "react";
import styles from "../page.module.css";
import ActionBar from "../components/actionBar";
import Notice from "../components/notice";
import "../static/notice.css";
import MoreBtn from "../components/moreBtn";

export default function NoticePage() {
  const [noticeData, setNoticeData] = useState([]);
  const [displayedNotices, setDisplayedNotices] = useState(5); // 초기에 보여줄 공지사항 수
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const noticeRes = await fetch("/api/notice");
        const noticeData = await noticeRes.json();
        setNoticeData(noticeData);
        console.log(noticeData);
      } catch (error) {
        console.log("데이터 에러 : ", error);
      }
    };
    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("ko-KR", options);
  };

  const handleLoadMore = () => {
    setLoadingMore(true);

    setDisplayedNotices((prevCount) => prevCount + 5);

    setLoadingMore(false);
  };

  return (
    <div className={styles.main}>
      <ActionBar pageTitle="공지방" backUrl="/studentpage" />
      {noticeData.slice(0, displayedNotices).map((notice) => (
        <Notice key={notice.id} publisher={notice.publisher} noticeTitle={notice.notice_title} noticeContent={notice.notice_content} noticeTime={formatDate(notice.created_at)} />
      ))}
      {noticeData.length > displayedNotices && <MoreBtn onClick={handleLoadMore} loading={loadingMore} />}
    </div>
  );
}
