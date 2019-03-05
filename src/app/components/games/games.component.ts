import { Component, OnInit } from '@angular/core';
import {GamesService} from '../../services/games/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.gamesService.getGames()
      .subscribe((data) => {
        console.log('dados', data)
      });
  }

}
