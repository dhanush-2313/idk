"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
class GameManager {
    constructor() {
        this.games = [];
    }
    static getInstance() {
        if (!GameManager.instance) {
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }
    addGame(game) {
        this.games.push(game);
    }
    getGames() {
        return this.games;
    }
    addMove(gameId, move) {
        const game = this.games.find((game) => game.id === gameId);
        game === null || game === void 0 ? void 0 : game.moves.push(move);
    }
    logState() {
        console.log(this.games);
    }
}
exports.GameManager = GameManager;
