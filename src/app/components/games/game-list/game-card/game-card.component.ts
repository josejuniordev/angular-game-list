import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import Game from '../../../../classes/Game';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent implements OnInit {
  @Input()
  game: Game;

  constructor() { }

  ngOnInit() {
  }

}
