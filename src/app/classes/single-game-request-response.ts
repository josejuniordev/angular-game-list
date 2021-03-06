export interface SingleGameRequestResponse {
  game: GameProperties;
}

interface GameProperties {
  _id: number;
  name: string;
  popularity: number;
  logo: GameLogoKeys;
}

export interface GameLogoKeys {
  large: string;
  medium: string;
  small: string;
  template: string;
}
