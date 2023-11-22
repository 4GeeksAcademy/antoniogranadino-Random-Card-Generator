const letterOfCard = [
  "A",
  "J",
  "Q",
  "K",
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2"
];

const trumps = [
  '<i class="bi bi-suit-heart-fill" style="color: red;"></i>',
  '<i class="bi bi-suit-spade-fill"></i>',
  '<i class="bi bi-suit-club-fill"></i>',
  '<i class="bi bi-suit-diamond-fill" style="color: red;"></i>'
];

window.onload = function() {
  const randomCard = document.getElementById("card");
  let letter = letterOfCard[Math.floor(Math.random() * letterOfCard.length)];
  let trump = trumps[Math.floor(Math.random() * trumps.length)];

  const card2 = `
  <div class="container-fluid">
    <div class="row">
        <div class="card" style="width: 400px;">
            <div class="d-flex justify-content-start fs-1 h-2 mb-5">
                ${trump}
            </div>
            <div class="d-flex justify-content-center m-5 p-5">
                <h1>${letter}</h1>
            </div>
            <div class="d-flex justify-content-end fs-1 mt-5">
                <span style ="transform:rotate(180deg)">
                ${trump}
                </span>
            </div>
        </div>
    </div>
  </div>
  `;
  randomCard.innerHTML = card2;
};
