import { games } from "./store";

function startLogger() {
  setInterval(() => {
    console.log(games);
  }, 5000);
}
