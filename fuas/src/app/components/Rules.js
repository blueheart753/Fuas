import React from "react";

function Rule() {
  return (
    <div className="rule_container">
      <div className="rule_wrap">
        <p>이용규칙</p>
        <div className="rule_content">
          <p>하루 최대 사용인원은 20명으로 하여 순번이 20번이 되면 그날 사용 인원 마감이 됩니다.</p>
          <p>AI융합실은 음식물(음료포함) 반입 절대 금지 입니다.</p>
          <p>마지막에 나가는 학생은 정리가 깨끗이 된 AI융합실 전체 사진을 찍어 올리고 퇴실합니다.</p>
          <p>우리모두 깨끗하게 함께 사용할 수 있도록 합시다.</p>
        </div>
      </div>
      <button type="button" className="accept">
        확인
      </button>
    </div>
  );
}

export default Rule;
