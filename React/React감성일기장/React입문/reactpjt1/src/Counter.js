import React, { useState } from "react";
import OddEvenResult from "./OddEvenResult";

// const Counter = (props) => {
// 비구조화 할당을 통해 받을 수 있다
// 특정 props가 undefined로 전달될 것 같을 때
// defaultProps 설정(코드 밑에 부분 참고)
// 전달받지 못한 props의 기본값을 설정해서 에러 방지
/*
Counter.defaultProps ={
    job: 'worldTopDeveloper'
}
*/
const Counter = ({ job }) => {
  console.log(job);
  // console.log(props); // 객체로 담겨서 온다

  // 0에서 출발
  // 1씩 증가하고
  // 1씩 감소하는
  // count 상태

  console.log("counter 호출");

  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount2(count2 - 1);
  };

  const [count2, setCount2] = useState(0); // 이름 안겹치게

  const onIncrease2 = () => {
    setCount2(count2 + 1);
  };

  const onDecrease2 = () => {
    setCount2(count2 - 1);
  };

  const [seolyu, setSeolyu] = useState(job);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>

      <h2>{count2}</h2>
      <button onClick={onIncrease2}>+</button>
      <button onClick={onDecrease2}>-</button>

      <OddEvenResult count={count} />
    </div>
  );
};

Counter.defaultProps = {
  job: "worldTopDeveloper",
};

export default Counter;
