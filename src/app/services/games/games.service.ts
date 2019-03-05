import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Game from '../../classes/Game';

@Injectable({
  providedIn: 'root'
})

export class GamesService {
  private gameListUrl = 'https://api.twitch.tv/kraken/games/top?limit=12';
  private clientId = 'il6gmpiwf45t5xnka8244b3hszjdtf';

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    const headers = {
      'Client-Id': this.clientId
    };

    return this.http.get(
      this.gameListUrl,
      {
        headers
      }
    )
      .pipe(
        map(gamesData => {
          alert('test')
          if (gamesData && gamesData.top) {
            return gamesData.top.map(
              source => {
                const { game } = source;
                return new Game(game._id, game.name, game.popularity, game.logo.large);
              }
            );
          } else {
            return [];
          }
        })
      );
  }
}
