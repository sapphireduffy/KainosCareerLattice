import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-career-table',
  templateUrl: './career-table.component.html',
  styleUrls: ['./career-table.component.css']
})
export class CareerTableComponent implements OnInit {

  departmentName: any;
  // bands = ["Executive", "Leadership Community", "Principal", "Manager", "Consultant", "Senior Associate", "Associate", "Trainee", "Apprentice"]
  example = ['a','b','c','','e','f']

  
  capabilities = [];
  jobsInDep: any;
  bands: any;
  r = [];

  constructor(private dataService: DataService) { }
 
  async ngOnInit() {
    this.dataService.getCapabilityNamesByDepartment(1).then(response =>{
      this.capabilities = response;
      // console.log(this.capabilities);
    });

    this.dataService.getDepartmentDetails(1).then(response =>{
      this.departmentName = response;
    })

    await this.dataService.getRolesInDepartment(1).then(response => {
      this.jobsInDep = response;
      console.log(this.jobsInDep);
    })

    await this.dataService.getBands().then(response =>{
      this.bands = response;
      // console.log(this.bands);
    })

 
  }


  // getRoles(){
  //   for(let band of this.bands){
  //     for(let cap of this.capabilities){
  //       for(let role of this.jobsInDep){
  //           if(role.capability_id == cap.capability_id && role.band_id == band.band_id){
       
  //               var rn = {
  //                 roleID:role.role_id,
  //                 roleName: role.RoleName,
  //                 bandName: band.name,
  //                 capName: cap.CapabilityName
  //               };
  //               this.r.push(rn);
  //           }
  //       }



  //     }

  //   }
  // }
}
