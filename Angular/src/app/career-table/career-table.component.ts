import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    var id = this.dataService.deptID;
    
    this.dataService.getCapabilityNamesByDepartment(id).then(response =>{
      this.capabilities = response;
    });

    this.dataService.getAllData(id).then(response => {
      this.roleCapabilityData = response;
      this.sortRoleCapabilityMap();
    })

    this.dataService.getDepartmentDetails(id).then(response =>{
      this.departmentName = response;
    })
  }

  sortRoleCapabilityMap(){
    for(let capability of this.capabilities){
      var roles = [];
      for(let roleCap of this.roleCapabilityData){
        if(capability.name == roleCap.CapabilityName){
          roles.push(roleCap.RoleName);
          this.rolesCapabilityMap.set(capability.name, roles);
        }
      }
    }
  }
}