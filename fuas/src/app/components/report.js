"use client";

function report() {
  return (
    <div className="report_container">
      <div className="report_wrap">
        <form className="report_form">
          <div className="info">
            <p>제보자</p>
            <input type="text" placeholder="Ex) 김OO" />
          </div>
          <div className="info">
            <p>제보할 사람</p>
            <input type="text" placeholder="Ex) 이OO 혹은 복수 일 경우 김OO, 홍OO..." />
          </div>
          <div className="info">
            <p>제목</p>
            <input type="text" />
          </div>
          <div className="info">
            <p>카테고리</p>
            <input type="text" placeholder="Ex) 김OO" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default report;
