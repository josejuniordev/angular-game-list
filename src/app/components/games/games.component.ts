import { Component, OnInit } from '@angular/core';
import {GamesService} from '../../services/games/games.service';
import Game from '../../classes/Game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  public games: Game[] = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.gamesService.getGames()
      .subscribe((games) => {
        this.games = games;
      });
  }

}
