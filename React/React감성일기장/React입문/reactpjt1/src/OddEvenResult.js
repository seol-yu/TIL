const OddEvenResult = ({ count }) => {
  //   console.log(count);
  //   console.log("Render"); // 부모 컴포넌트 state가 바뀌면 자식 컴포넌트 리렌더
  return <>{count % 2 === 0 ? "짝수" : "홀수"}</>;
};

export default OddEvenResult;
