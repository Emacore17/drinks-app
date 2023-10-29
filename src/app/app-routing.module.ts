import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkCardComponent } from './drink-card/drink-card.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: DrinkCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
