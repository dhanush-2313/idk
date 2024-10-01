"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const logger_1 = require("./logger");
const gameManager = new store_1.GameManager();
(0, logger_1.startLogger)(gameManager);
setInterval(() => {
    const newGame = {
        id: Math.random().toString(),
        whitePlayer: "Player1",
        blackPlayer: "Player2",
        moves: [],
    };
    gameManager.addGame(newGame);
}, 5000);
