import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonResourcesService {

  startUpCategory = ["Tech", "Agric", "Health"];
  constructor() { }

  /*TODO: make this call an actual rest endpoint
    that returns this list of category
  */
  public getStartUpCategory(){
    return this.startUpCategory;
  }
}
