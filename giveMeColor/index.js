const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

// blueprint에 colors배열이 선언되어 있습니다.
// 사용자가 버튼을 클릭하면 colors배열에서 두 가지 색상이 랜덤으로 선택되어야 합니다.
// body태그의 style을 랜덤으로 선택된 두 가지 색상을 사용해 linear-gradient로 변경하세요.

const btn = document.querySelector("#btn");

btn.addEventListener("click", click);

function click(e) {
  const chosenColor1 = colors[Math.floor(Math.random() * colors.length)];
  const chosenColor2 = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = `linear-gradient(0.25turn, ${chosenColor1}, ${chosenColor2})`;
}
