import { Component, OnInit } from '@angular/core';
import { SharedResourcesService } from '../shared-resources.service';

@Component({
  selector: 'app-investor-nav-menu',
  templateUrl: './investor-nav-menu.component.html',
  styleUrls: ['./investor-nav-menu.component.css']
})
export class InvestorNavMenuComponent implements OnInit {
  sharedResourceService: SharedResourcesService;
  investorMatchList: Map<string, string>;
  numberOfMatches: number = 0;

  constructor(injectedResourceService: SharedResourcesService) { 
    this.sharedResourceService = injectedResourceService;
    this.investorMatchList = new Map<string, string>();
  }

  ngOnInit(): void {
    this.investorMatchList = this.sharedResourceService.getBusinessStartupList();
    this.numberOfMatches = this.investorMatchList.size;
  }

}
