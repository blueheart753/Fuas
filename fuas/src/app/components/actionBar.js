"use clinet";
import React from "react";
import Image from "next/image";
import backImg from "/public/Vector.png";
import { usePathname, useRouter } from "next/navigation";

function Student(props) {
  const { pageTitle, backUrl } = props;
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="actionBar">
      <button type="button" className="backButton" onClick={() => router.push(`${backUrl}`)}>
        <Image src={backImg} alt="뒤로가기" />
      </button>
      <div>
        <h2 className="pageTitles">{pageTitle}</h2>
      </div>
    </div>
  );
}

export default Student;
