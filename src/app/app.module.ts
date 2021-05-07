import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestorNavMenuComponent } from './investor-nav-menu/investor-nav-menu.component';
import { InvestorDashboardComponent } from './investor-dashboard/investor-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestorNavMenuComponent,
    InvestorDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
