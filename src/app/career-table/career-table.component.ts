import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-career-table',
  templateUrl: './career-table.component.html',
  styleUrls: ['./career-table.component.css']
})
export class CareerTableComponent implements OnInit {

  rolesCapabilityMap = new Map<string, string[]>();
  capabilities = [];
  roleCapabilityData: any;
  departmentName: any;
  bands = ["Executive", "Leadership Community", "Principal", "Manager", "Consultant", "Senior Associate", "Associate", "Trainee", "Apprentice"]
  example = ['a','b','c','','e','f']

  executiveJobs: any;


  constructor(private dataService: DataService) { }
 
  async ngOnInit() {
    this.dataService.getCapabilityNamesByDepartment(1).then(response =>{
      this.capabilities = response;
    });

    this.dataService.getAllData(1).then(response => {
      this.roleCapabilityData = response;
      this.sortRoleCapabilityMap();
    })

    this.dataService.getDepartmentDetails(1).then(response =>{
      this.departmentName = response;
    })

    await this.dataService.getRolesInDepartmentByBand(1, 1).then(response => {
      this.executiveJobs = response;
      console.log(this.executiveJobs);
    })

   
    this.getCapabilityBandRole();
  }

  sortRoleCapabilityMap(){ 
    console.log(this.roleCapabilityData);
    for(let capability of this.capabilities){
      var roles = [];
      for(let roleCap of this.roleCapabilityData){
        if(capability.name == roleCap.CapabilityName){
          roles.push(roleCap.RoleName);
          // roles.push(roleCap.name);
          this.rolesCapabilityMap.set(capability.name, roles);
        }
      }
    }
  }

  getCapabilityBandRole(){
    for(let band of this.bands){
      var roles = [];
      roles.push(band);
      for(let ex of this.executiveJobs){
        if(roles[0] == ex["RoleName"] ){
            console.log("rrr");
        }
      }
    }
    console.log(roles);
  }

}
