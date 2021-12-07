import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "이설유",
    content: "내용1",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "이설유2",
    content: "내용2",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "이설유3",
    content: "내용3",
    emotion: 3,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
