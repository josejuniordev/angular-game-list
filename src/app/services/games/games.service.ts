import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Game from '../../classes/Game';
import {GamesRequestResponse} from '../../classes/games-request-response';

@Injectable({
  providedIn: 'root'
})

export class GamesService {
  private gameListUrl = 'https://api.twitch.tv/kraken/games/top?limit=12';
  private clientId = 'il6gmpiwf45t5xnka8244b3hszjdtf';

  private games: Game[] = [];

  public gamesLoaded = false;

  constructor(private http: HttpClient) {}

  loadGames(): Promise<Game[]> {
    const headers = {
      'Client-Id': this.clientId
    };

    return new Promise((resolve, reject) => {
      this.http.get(
        this.gameListUrl,
        {
          headers
        }
      )
        .pipe(
          map(((gamesData: GamesRequestResponse) => {
              if (gamesData && gamesData.top) {
                return gamesData.top.map(
                  source => {
                    const { game } = source;
                    return new Game(game._id, game.name, game.popularity, game.logo);
                  }
                );
              } else {
                return [];
              }

            })
          ))
        .subscribe(games => {
          this.games = games;
          this.gamesLoaded = true;
          resolve(games);
        });
    });
  }

  getGames(): Promise<Game[]> {
    return new Promise((resolve, reject) => {
      if (!this.gamesLoaded) {
        this.loadGames().then(resolve);
      } else {
        resolve(this.games);
      }
    });
  }

  getGame(gameId: number): Promise<Game|null> {
    return new Promise((resolve, reject) => {
      this.getGames().then(games => {
        const foundGame = games.find(game => game.id === gameId);

        if (foundGame) {
          resolve(foundGame);

        } else {
          reject(null);
        }
      });
    });
  }
}
