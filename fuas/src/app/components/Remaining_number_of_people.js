import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Remaining_number_of_people() {
  const [remainingNumber, setRemainingNumber] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/count");
        const data = await response.json();
        setRemainingNumber(data);
      } catch (error) {
        console.error("API 호출 중 오류:", error);
      }
    };

    fetchData();
  }, []);

  if (!Array.isArray(remainingNumber)) {
    return (
      <div className="remaining_number_of_people">
        <div className="member_wrap">
          <p>남은인원</p>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  const uuids = remainingNumber.map(() => uuidv4());

  return (
    <div className="remaining_number_of_people">
      <div className="member_wrap">
        <p>남은인원</p>
        {remainingNumber.map((person, index) => (
          <p key={uuids[index]}>{20 - person.total_count}명</p>
        ))}
      </div>
    </div>
  );
}

export default Remaining_number_of_people;