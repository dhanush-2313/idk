import { GameManager, Game } from "./store";
import { startLogger } from "./logger";

const gameManager = new GameManager();
startLogger(gameManager);

setInterval(() => {
  const newGame: Game = {
    id: Math.random().toString(),
    whitePlayer: "Player1",
    blackPlayer: "Player2",
    moves: [],
  };
  gameManager.addGame(newGame);
}, 5000);
