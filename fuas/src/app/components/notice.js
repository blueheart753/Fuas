import React from "react";

function notice(props) {
  const { noticeTitle, noticeContent, noticeTime, publisher } = props;

  const truncatedTitle = noticeTitle.length > 20 ? noticeTitle.substring(0, 20) + "..." : noticeTitle;
  const truncatedContent = noticeContent.length > 20 ? noticeContent.substring(0, 20) + "..." : noticeContent;

  return (
    <div className="notice_container">
      <div className="notice_wrap">
        <div className="noticeBox">
          <div className="notice_box">
            <div className="notice_content_box">
              <p className="publisher">
                {publisher} - <span className="notice_title">{truncatedTitle} </span>
              </p>
              <p className="notice_contnet"> {truncatedContent} </p>
            </div>
            <div className="time_box">
              <p className="notice_time">{noticeTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default notice;
