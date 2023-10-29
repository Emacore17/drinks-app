import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DrinkCardComponent } from './drink-card/drink-card.component';
import { HomeComponent } from './home/home.component';
import { DrinkDetailComponent } from './drink-detail/drink-detail.component';
import { LucideAngularModule, Martini, Home } from 'lucide-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DrinkCardComponent,
    HomeComponent,
    DrinkDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LucideAngularModule.pick({ Martini, Home }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
