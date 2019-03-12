import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesComponent } from './games.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FilterFormComponent} from './filter-form/filter-form.component';
import {GameListComponent} from './game-list/game-list.component';
import {GameCardComponent} from './game-list/game-card/game-card.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

describe('GamesComponent', () => {
  let component: GamesComponent;
  let fixture: ComponentFixture<GamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GamesComponent,
        FilterFormComponent,
        GameListComponent,
        GameCardComponent
      ],
      imports: [
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
