import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListComponent } from './game-list.component';
import {GameCardComponent} from './game-card/game-card.component';
import {RouterModule} from '@angular/router';

describe('GameListComponent', () => {
  let component: GameListComponent;
  let fixture: ComponentFixture<GameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameListComponent,
        GameCardComponent
      ],
      imports: [
        RouterModule.forRoot([])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
