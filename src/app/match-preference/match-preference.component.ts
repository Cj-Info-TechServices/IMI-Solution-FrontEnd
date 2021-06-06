import { Component, OnInit } from '@angular/core';
import { CommonResourcesService } from '../common-resources.service';

@Component({
  selector: 'app-match-preference',
  templateUrl: './match-preference.component.html',
  styleUrls: ['./match-preference.component.css']
})
export class MatchPreferenceComponent implements OnInit {

  startupCategoryDropDownItems: Array<string>;

  constructor(private resourceService: CommonResourcesService) {
    this.startupCategoryDropDownItems = new Array<string>();
  }

  ngOnInit(): void {
    this.startupCategoryDropDownItems = this.resourceService.getStartUpCategory();
  }

  updatePreference(){
    alert("preference updated ...");
  }

  setChangeValue(selectedValue:any){
    alert("changed value: " + selectedValue);
  }

}
