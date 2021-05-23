import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestorNavMenuComponent } from './investor-nav-menu/investor-nav-menu.component';
import { InvestorDashboardComponent } from './investor-dashboard/investor-dashboard.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { MatchPreferenceComponent } from './match-preference/match-preference.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestorNavMenuComponent,
    InvestorDashboardComponent,
    MatchPreferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
