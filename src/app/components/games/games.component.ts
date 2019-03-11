import { Component, OnInit } from '@angular/core';
import {GamesService} from '../../services/games/games.service';
import Game from '../../classes/Game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
})
export class GamesComponent implements OnInit {
  public games: Game[] = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.gamesService.loadGames()
      .then(games => {
        this.games = games;
      });
  }

  onFilterHandler(term) {
    this.gamesService.getGames()
      .then(games => {
        this.gamesService.filterGames(games, term)
          .then(filteredGames => {
            this.games = filteredGames;
          });
      });
  }

}
