"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

function report() {
  const router = useRouter();
  const pathname = usePathname();
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
          <button type="button" className="submit" onClick={()=> router.push("/studentpage")}>제보하기</button>
        </form>
      </div>
    </div>
  );
}

export default report;
