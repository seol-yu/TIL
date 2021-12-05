let a = 3;

if (a >= 7) {
  console.log("5 이상입니다.");
} else if (a >= 5) {
  console.log("5 이하입니다.");
} else {
  console.log("5 미만입니다.");
}

let country = "ko";

if (country === "ko") {
  console.log("한국");
} else if (country === "cn") {
  console.log("중국");
} else if (country === "jp") {
  console.log("일본");
} else {
  console.log("미 분류");
}

switch (country) {
  case "ko":
    console.log("한국");
    break; // 적절한 타이밍에 break 써줘야함
  case "cn":
    console.log("중국");
    break;
  case "jp":
    console.log("일본");
    break;
  case "uk":
    console.log("영국");
    break;
  default:
    console.log("미 분류");
    break;
}
