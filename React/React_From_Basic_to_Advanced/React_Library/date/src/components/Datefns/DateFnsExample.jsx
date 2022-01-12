import React, { useRef, useState } from "react";
// import "moment/locale/ko";
// import dayjs from "dayjs";
// import "dayjs/locale/ko";
// import utc from "dayjs/plugin/utc";
// import timezone from "dayjs/plugin/timezone";

import { add, format, sub, differenceInHours } from "date-fns";
import { format as timezoneFormat } from "date-fns-tz";
import addWeeks from "date-fns/addWeeks";
// import { ko } from "date-fns/locale";
import ko from "date-fns/locale/ko";

// dayjs.locale("ko");
// dayjs.extend(utc);
// dayjs.extend(timezone);

export default function MomentExample() {
  const birthDayRef = useRef(null);
  const [day, setDay] = useState("");
  const handleBirthDayChange = (event) => {
    setDay(format(new Date(event.target.value), "EEEE", { locale: ko }));
  };
  const dateFnsDate = new Date();
  const newDateFnsDate = add(dateFnsDate, { weeks: 1 });
  const newDateFnsDate2 = addWeeks(newDateFnsDate, 1);
  return (
    <div>
      <h1>date-fns</h1>
      <div>Immutable Check</div>
      <div>
        {format(dateFnsDate, "yyyy-MM-dd")}
        <br />
        {format(newDateFnsDate, "yyyy-MM-dd")}
        <br />
        {format(newDateFnsDate2, "yyyy-MM-dd")}
      </div>
      <br />
      <div>Summer Time (New-york)</div>
      <div>
        2022년 3월 15일에 하루 더하기:
        {timezoneFormat(
          add(new Date("2022-03-15 13:00:00"), { days: 1 }),
          "yyyy-MM-dd HH:mm:ssXXX",
          {
            timeZone: "America/New_York",
          }
        )}
      </div>
      <div>
        2022년 3월 15일에 24시간 더하기:
        {timezoneFormat(
          add(new Date("2022-03-15 13:00:00"), { hours: 24 }),
          "yyyy-MM-dd HH:mm:ssXXX",
          {
            timeZone: "America/New_York",
          }
        )}
      </div>
      <br />
      <div>Leap year (korea)</div>
      <div>
        2017년 1월 1일에 1년 빼기:
        {format(sub(new Date("2017-01-01"), { years: 1 }), "yyyy-MM-dd")}
      </div>
      <div>
        2017년 1월 1일에 365 빼기:
        {format(sub(new Date("2017-01-01"), { days: 365 }), "yyyy-MM-dd")}
        {/* {dayjs("2017-01-01").subtract(365, "day").format()} */}
      </div>
      <br />
      <div>한국어로 표기 03-15-2022를 2022년 3월 15일로 표기</div>
      {format(new Date("03-15-2022"), "yyyy년 M월 d일")}
      {/* <div>{dayjs("03-15-2022").format("YYYY년 M월 D일")}</div> */}
      <br />
      <div>자기 생일 요일 찾기</div>
      <div>
        <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
        <div>무슨 요일이었을까?</div>
        <div>{day}</div>
      </div>
      <div>두 날짜 비교</div>
      <div>2022-03-15 3:00 와 2022-03-16 1:00 는 몇시간 차이?</div>
      <div>
        {`${differenceInHours(
          new Date("2022-03-15 3:00"),
          new Date("2022-03-16 1:00")
        )}시간`}
        {/* {`${dayjs("2022-03-15 3:00").diff(dayjs("2022-03-16 1:00"), "hours")}
        시간`} */}
      </div>
    </div>
  );
}
