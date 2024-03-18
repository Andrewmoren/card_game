import { createGameCard } from "./gameCard.js";
import { createIconsArray, dublicateArray, shuffle } from "./utils.js";

export const startGame = (difficult) => {
  let firstCard = null;
  let secondCard = null;
  let clickable = true;
  const gameSection = document.querySelector(".game-section__container");
  const gameTable = document.createElement("div");
  const cardsIcons = createIconsArray(difficult);
  const dublicatedCardsIcons = dublicateArray(cardsIcons);
  const restartBtn = document.createElement("button");

  gameSection.innerHTML = "";
  restartBtn.textContent = "Рестарт";
  gameTable.classList.add("game-table");
  restartBtn.classList.add("restart-btn");

  shuffle(dublicatedCardsIcons);
  dublicatedCardsIcons.forEach((icon) =>
    gameTable.append(createGameCard("question-circle", icon))
  );

  gameSection.append(gameTable, restartBtn);
  const cards = document.querySelector(".game-card");
  cards.forEach((card, index) => {
  
    card.addEventListener("click", () => {});
  });
};
