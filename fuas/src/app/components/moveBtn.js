"use clinet";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

function moveBtns(props) {
  const { targetUrl, buttonName, buttonClass } = props;
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="move_button_container">
      <div className="move_button_wrap">
        <button type="button" className={buttonClass} onClick={() => router.push(`${targetUrl}`)}>
          {buttonName}
        </button>
      </div>
    </div>
  );
}

export default moveBtns;
