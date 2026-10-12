const sampleRaces = [
  { race: "第1R", prediction: "1 - 2 - 3" },
  { race: "第2R", prediction: "2 - 1 - 4" },
  { race: "第3R", prediction: "1 - 3 - 2" }
];

const root = document.querySelector("#races");

root.innerHTML = sampleRaces.map(r => `
  <article class="race-card">
    <div class="race-title">サンプル場 ${r.race}</div>
    <div class="prediction">
      <span>表示確認用の仮予想</span>
      <strong>${r.prediction}</strong>
    </div>
  </article>
`).join("");

const dateInput = document.querySelector("#race-date");
if (dateInput) {
  const d = new Date();
  dateInput.value =
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
