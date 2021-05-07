import { Component, OnInit } from '@angular/core';
import { SharedResourcesService } from '../shared-resources.service';

@Component({
  selector: 'app-investor-dashboard',
  templateUrl: './investor-dashboard.component.html',
  styleUrls: ['./investor-dashboard.component.css']
})
export class InvestorDashboardComponent implements OnInit {

  sharedResourceService: any;
  startupList: any;

  constructor(injectedResourceService: SharedResourcesService) { 
    this.sharedResourceService = injectedResourceService;
  }

  ngOnInit(): void {
    this.startupList = this.sharedResourceService.getBusinessStartupList();
    console.log(this.startupList);
  }

}
