import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../_services/data.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-career-table',
  templateUrl: './career-table.component.html',
  styleUrls: ['./career-table.component.css']
})
export class CareerTableComponent implements OnInit {
  // departmentID is passed from previous page in order to know what department data to show
  @Input() departmentID;
  @Input() currentCapability:any;

  rolesCap = new Map<string, string[]>();
  
  // Roles is filled by data service
    // roles:any[];
  departmentName: any;
  roles = [
    {
      "name": "Head of Business Unit",
      "band": "Executive",
      "capability": "Business Development",
    },
    {
      "name": "Sales Director",
      "band": "Leadership Community",
      "capability": "Business Development"
    },
    {
      "name": "Business Development Director",
      "band": "Principal",
      "capability": "Business Development"
    },
    {
      "name": "Senior Sales Executive",
      "band": "Principal",
      "capability": "Sales"
    }
  ];

  bands = [
    {
      "name": "Executive"
    },
    {
      "name": "Leadership Community"
    },
    {
      "name": "Principal"
    },
    {
      "name": "Manager"
    },
    {
      "name": "Consultant"
    },
    {
      "name": "Senior Associate"
    },
    {
      "name": "Associate"
    },
    {
      "name": "Trainee"
    },
    {
      "name": "Apprentice"
    }
  ]

  capabilities = [
    
  ];

  constructor(private dataService: DataService) { }
  role_capability: any;
  allData: any;
  ngOnInit() {
    //call endpoint
    this.dataService.getRoleByDepartment(1).then(response =>{
      this.roles = response;
      console.log(this.roles);
    })

    this.dataService.getDepartmentDetails(1).then(response =>{
      this.departmentName = response;
      // departmentName2 = JSON.parse(departmentName);
      console.log(this.departmentName);
    })

    this.dataService.getCapabilityNamesByDepartment(1).then(response =>{
      this.capabilities = response;
      // departmentName2 = JSON.parse(departmentName);
      console.log(this.capabilities);
    })

    this.dataService.getRoleByCapability(1).then(response =>{
      this.role_capability = response;
      // departmentName2 = JSON.parse(departmentName);
      console.log(this.capabilities);
    })

    this.dataService.getAllData(1).then(response => {
      this.allData = response;
      console.log(this.allData);
      this.sortRoles();
    })
  }

  sortRoles(){
    for(let cap of this.capabilities){
      var roles = [];
      for(let d of this.allData){
        
        if(cap.Name == d.CapabilityName){
        
          roles.push(d.RoleName);
          this.rolesCap.set(cap.Name, roles);
        }
      }
    }

    console.log(this.rolesCap);

    for(let cap of this.rolesCap){
        // console.log(cap);

        for(let i of cap){
          console.log(i);

        // for(var o = 0; o<i.length; o++){
        //     console.log(i[o]);
        // }

        }
    }
  }

}
