"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = startLogger;
function startLogger(gameManager) {
    setInterval(() => {
        gameManager.logState();
    }, 5000);
}
