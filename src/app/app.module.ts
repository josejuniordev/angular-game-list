import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameListComponent } from './components/games/game-list/game-list.component';
import { GamesComponent } from './components/games/games.component';
import {HttpClientModule} from '@angular/common/http';
import { GameCardComponent } from './components/games/game-list/game-card/game-card.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GamesComponent,
    GameCardComponent
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
