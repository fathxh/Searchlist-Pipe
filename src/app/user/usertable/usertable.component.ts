import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent {
  searchCompany=""
  searchDesignation=""
  searchName:any
  data:any
  constructor(public http:HttpClient){}
  ngOnInit(){
    this.getData()
  }
  

  getData(){
    this.http.get('https://zil-test.s3.us-east-1.amazonaws.com/json-data.json')
    .subscribe((result:any)=>{
      console.log(result);
      
      this.data=result
    })
  }

}
