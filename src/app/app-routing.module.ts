import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import { GamesComponent } from './components/games/games.component';
import {GameDetailsComponent} from './components/games/game-details/game-details.component';

const routes: Routes = [
  { path: 'games', component: GamesComponent },
  { path: 'game/:id', component: GameDetailsComponent },
  { path: '', redirectTo: '/games', pathMatch: 'full'},
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
