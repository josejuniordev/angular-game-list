import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import { GamesComponent } from './components/games/games.component';
import {GameDetailComponent} from './components/games/game-detail/game-detail.component';

const routes: Routes = [
  { path: 'games', component: GamesComponent },
  { path: 'game/:id', component: GameDetailComponent },
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
