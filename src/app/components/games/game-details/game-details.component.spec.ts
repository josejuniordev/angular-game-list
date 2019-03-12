import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetailsComponent } from './game-details.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

describe('GameDetailsComponent', () => {
  let component: GameDetailsComponent;
  let fixture: ComponentFixture<GameDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDetailsComponent ],
      imports: [
        RouterModule.forRoot([]),
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
