"use strict";

const cardRow = document.querySelector(".row");
cardRow.classList.add("row-gap-25", "d-flex", "justify-content-center");

const cardData = [
  {
    cardIamge: `./assets/img/png/croud.png`,
    cardheading: `Lorem <span class="text-danger">ipsum</span> dolar sit de`,
    cardbtn: `Go Check`,
    iconBox: [
      `./assets/img/svg/calender.svg`,
      `./assets/img/svg/location.svg`,
      `./assets/img/svg/team.svg`,
    ],
  },
  {
    cardIamge: `./assets/img/png/holi.png`,
    cardheading: `Lorem <span class="text-danger">ipsum</span> dolar sit de`,
    cardbtn: `Go Check`,
    iconBox: [
      `./assets/img/svg/calender.svg`,
      `./assets/img/svg/location.svg`,
      `./assets/img/svg/team.svg`,
    ],
  },
  {
    cardIamge: `./assets/img/png/croud.png`,
    cardheading: `Lorem <span class="text-info-emphasis">ipsum</span> dolar sit de`,
    cardbtn: `Go Check`,
    iconBox: [
      `./assets/img/svg/calender.svg`,
      `./assets/img/svg/location.svg`,
      `./assets/img/svg/team.svg`,
    ],
  },
];

for (let i = 0; i < cardData.length; i++) {
  const cardColumn = document.createElement("div");
  cardColumn.classList.add("col-lg-4", "col-md-6", "col-12");
  const card = document.createElement("div");
  card.classList.add(
    "card-box",
    "d-flex",
    "flex-column",
    "justify-content-between",
    "pointer"
  );
  card.innerHTML = `
        <img class="cards-img w-100" src="${cardData[i].cardIamge}" alt="pary-imge">
        <h3 class="fw-600 fs-24 lh-36 clr-blk my-21-12">${cardData[i].cardheading}</h3>
        <div class="mb-32">
             <div class="d-flex align-items-center gap-2">
                <img class="pointer" src="${cardData[i].iconBox[0]}" alt="pary-imge">
                <h4 class="fw-400 fs-16 lh-24 clr-blk opacity-60 mb-0">10/02/2022</h4>
            </div>
             <div class="d-flex align-items-center gap-2 my-17-14">
                <img class="pointer" src="${cardData[i].iconBox[1]}" alt="pary-imge">
                <h4 class="fw-400 fs-16 lh-24 clr-blk opacity-60 mb-0">Mumbai</h4>
            </div>
             <div class="d-flex align-items-center gap-2">
                <img class="pointer" src="${cardData[i].iconBox[2]}" alt="pary-imge">
                <h4 class="fw-400 fs-16 lh-24 clr-blk opacity-60 mb-0">1,080</h4>
            </div>
        </div>
        <button class="card-btn ">${cardData[i].cardbtn}</button>
    `;
  cardColumn.appendChild(card);
  cardRow.appendChild(cardColumn);
}
