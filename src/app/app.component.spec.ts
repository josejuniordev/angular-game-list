import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {GamesComponent} from './components/games/games.component';
import {GameDetailsComponent} from './components/games/game-details/game-details.component';
import {FilterFormComponent} from './components/games/filter-form/filter-form.component';
import {GameListComponent} from './components/games/game-list/game-list.component';
import {GameCardComponent} from './components/games/game-list/game-card/game-card.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GamesComponent,
        GameDetailsComponent,
        FilterFormComponent,
        GameListComponent,
        GameCardComponent
      ],
      imports: [
        AppRoutingModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
