import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameListComponent } from './components/games/game-list/game-list.component';
import { GamesComponent } from './components/games/games.component';
import {HttpClientModule} from '@angular/common/http';
import { GameCardComponent } from './components/games/game-list/game-card/game-card.component';
import { AppRoutingModule } from './app-routing.module';
import { GameDetailsComponent } from './components/games/game-details/game-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GamesComponent,
    GameCardComponent,
    GameDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
