import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import {GamesService} from '../../../services/games/games.service';
import Game from '../../../classes/Game';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-details.component.html',
})
export class GameDetailsComponent implements OnInit {
  game: Game;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gamesService: GamesService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gamesService.getGame(id)
      .then(game => this.game = game);
  }

}
