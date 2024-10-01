interface gameType {
  id: string;
  whitePlayerName: string;
  blackPlayerName: string;
  moves: string[];
}

export const games: gameType[] = [];
