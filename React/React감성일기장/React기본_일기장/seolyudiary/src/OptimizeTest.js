import React, { useState, useEffect } from "react";

const Textview = React.memo(({ text }) => {
  useEffect(() => {
    console.log(`Update :: Text : ${text}`);
  });
  return <div>{text}</div>;
});

const CountView = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`Update :: count : ${count}`);
  });
  return <div>{count}</div>;
});

const SeolyuA = React.memo(({ seolyu }) => {
  useEffect(() => {
    console.log(`SeolyuA Update - seolyu: ${seolyu}`);
  });
  return <div>{seolyu}</div>;
});

const SeolyuB = ({ syl }) => {
  useEffect(() => {
    console.log(`SeolyuB Update - seolyu: ${syl.seolyu}`);
  });
  return <div>{syl.seolyu}</div>;
};

const areEqual = (prevProps, nextProps) => {
  // return true  // 이전 프롭스 현재 프롭스가 같다 -> 리렌더링을 일으키지 않게됨
  // return false  // 이전과 현재가 다르다 -> 리렌더링을 일으키라
  return prevProps.syl.seolyu === nextProps.syl.seolyu;
};

const MemoizedSeolyuB = React.memo(SeolyuB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  const [seolyu, setSeolyu] = useState(1);
  const [syl, setSyl] = useState({
    seolyu: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Seolyu A</h2>
        <SeolyuA seolyu={seolyu} />
        <button onClick={() => setSeolyu(seolyu)}>A button</button>
      </div>
      <div></div>
      <div>
        <h2>Seolyu B</h2>
        <MemoizedSeolyuB syl={syl} />
        <CountView count={count} />
        <button
          onClick={() =>
            setSyl({
              seolyu: syl.seolyu,
            })
          }
        >
          B button
        </button>
      </div>
      <div>
        <h2>text</h2>
        <Textview text={text} />
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};

export default OptimizeTest;
