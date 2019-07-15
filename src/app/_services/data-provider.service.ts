import { Injectable } from '@angular/core';
import { TestTable } from '../_classes/test-table';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor(private http: HttpClient) { }
  dataList = this.http.get<TestTable[]>('/api/testtable');
}
