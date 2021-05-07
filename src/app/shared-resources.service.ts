import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedResourcesService {

  business_startup_list: Map<string, string>;
  
  constructor() {
    this.business_startup_list = new Map<string, string>();
    this.business_startup_list.set("Startup 1", "photo1.png");
    this.business_startup_list.set("Startup 2", "photo2.png");
    this.business_startup_list.set("Startup 3", "photo3.jpg");
    this.business_startup_list.set("Startup 4", "photo4.jpg");
    this.business_startup_list.set("Startup 5", "prod-1.jpg");
    this.business_startup_list.set("Startup 6", "prod-2.jpg");
    this.business_startup_list.set("Startup 7", "prod-5.jpg");
  }

  getBusinessStartupList(){
    return this.business_startup_list;
  }

  
}
