import { GameManager } from "./store";

export function startLogger(gameManager: GameManager) {
  setInterval(() => {
    gameManager.logState();
  }, 5000);
}
