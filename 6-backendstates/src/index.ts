import { GameManager, Game } from "./store";
import { startLogger } from "./logger";

// Get the singleton instance of GameManager
const gameManager = GameManager.getInstance();

// Start the logger with the gameManager instance
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
