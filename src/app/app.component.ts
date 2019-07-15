import { Component, OnInit } from '@angular/core';
import { DataProviderService } from './_services/data-provider.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MySQLConn is working!';

  constructor(private data: DataProviderService) {  }

  ngOnInit() {
    
  }
}
