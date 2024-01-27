"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

function MoveSection() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="move_to_section_wrap">
      <button type="button" className="move_to_section" onClick={() => router.push("/notice")}>
        공지방
      </button>
      <button type="button" className="move_to_section" onClick={() => router.push("/reportpage")}>
        제보방
      </button>
      <button type="button" className="move_to_section">
        인증방
      </button>
    </div>
  );
}

export default MoveSection;
