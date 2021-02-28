const matrix_effect = document.querySelector("canvas");
const neo = matrix_effect.getContext("2d");
const morpheus = (matrix_effect.width = window.innerWidth);
const trinity = (matrix_effect.height = window.innerHeight);

const str = "すし! 寿司@ 壽司$ 鮨% 鮓^ 寿斗& 寿し* 握り寿司0 軍艦巻 巻き寿司1 太巻き2 細巻き3 手巻き4 裏巻き5 押し寿司6 稲荷寿司7 散らし寿司8 江户前散らし寿司9 五目鮨- 熟れ鮨+";
const matrix = str.split("");

let font = 11;
let col = morpheus / font;
let arr = [];

for (let i = 0; i < col; i++) arr[i] = 1;

function draw() {
  neo.fillStyle = "rgba(0,0,0,.05)";
  neo.fillRect(0, 0, morpheus, trinity);
  neo.fillStyle = "#0f0";
  neo.font = font + "px system-ui";
  for (let i = 0; i < arr.length; i++) {
    let txt = matrix[Math.floor(Math.random() * matrix.length)];
    neo.fillText(txt, i * font, arr[i] * font);
    if (arr[i] * font > trinity && Math.random() > 0.975) arr[i] = 0;
    arr[i]++;
  }
}

setInterval(draw, 123);

window.addEventListener("resize", () => location.reload());
