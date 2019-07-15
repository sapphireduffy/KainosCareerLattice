import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-career-table',
  templateUrl: './career-table.component.html',
  styleUrls: ['./career-table.component.css']
})
export class CareerTableComponent implements OnInit {
  // departmentID is passed from previous page in order to know what department data to show
  @Input() departmentID;
  
  // Roles is filled by data service
    // roles:any[];
  roles = [
    {
      "name": "Head of Business Unit",
      "band": "Executive",
      "capability": "Business Development"
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
    {
      "name": "Business Development"
    },
    {
      "name": "Account Management"
    },
    {
      "name": "Sales"
    },
    {
      "name": "Inside Sales Development"
    },
    {
      "name": "Pre Sales & Bid Management"
    },
    {
      "name": "Marketing"
    }
  ];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //call endpoint
    this.dataService.getRoleByDepartment(1).then(response =>{
      this.roles = response;
      console.log(this.roles);
    })
  }

}
