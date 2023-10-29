import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkCardComponent } from './drink-card/drink-card.component';
import { HomeComponent } from './home/home.component';
import { DrinkDetailComponent } from './drink-detail/drink-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'drink/:id',
    component: DrinkDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
