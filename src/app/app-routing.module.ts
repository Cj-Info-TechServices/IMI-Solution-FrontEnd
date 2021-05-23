import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestorDashboardComponent } from './investor-dashboard/investor-dashboard.component';
import { MatchPreferenceComponent } from './match-preference/match-preference.component';

const routes: Routes = [ {path:'', component: InvestorDashboardComponent}, // change this empty url to navigate to the login page,
                          {path:'investor-dashboard', component: InvestorDashboardComponent},
                          {path: 'match-preferences', component: MatchPreferenceComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
