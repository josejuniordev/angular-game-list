import { GameLogoKeys } from './single-game-request-response';

class Game {
  id: number;
  name: string;
  popularity: number;
  logo: GameLogoKeys;

  constructor(id, name, popularity, logo) {
    this.id = id;
    this.name = name;
    this.popularity = popularity;
    this.logo = logo;
  }
}

export default Game;
