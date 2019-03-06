import { Component, OnInit, Input } from '@angular/core';
import Game from '../../../classes/Game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
})
export class GameListComponent implements OnInit {
  @Input()
  games: Game[] = [];

  constructor() { }

  ngOnInit() {
  }

}
