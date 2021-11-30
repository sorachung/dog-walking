import { getWalkers } from "./database.js";
import { getCities } from "./database.js";

const walkers = getWalkers();
const cities = getCities();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("walker")) {
    const [, walkerId] = itemClicked.id.split("--");

    const clickedWalker = walkers.find((walker) => walker.id === parseInt(walkerId));

    for (const city of cities) {
      if (clickedWalker.cityId === city.id) {
        window.alert(`${clickedWalker.name} services ${city.name}`);
      }
    }
  }
});

export const Walkers = () => {
  let walkerHTML = "<ul>";

  for (const walker of walkers) {
    walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`;
  }

  walkerHTML += "</ul>";

  return walkerHTML;
};
