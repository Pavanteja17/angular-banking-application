import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-budget-app',
  templateUrl: './budget-app.component.html',
  styleUrls: ['./budget-app.component.css']
})
export class BudgetAppComponent implements OnInit {
  name = 'Angular';
  enableEdit = false;
  enableEditIndex: any = null;
  backendData = [{
    "amount": 1000 ,
    "id": 1
  },
  {
    "amount": 2000,
    "id": 2
  }]

  enableEditMethod(e:Event, i:number) {
    this.enableEdit = true;
    this.enableEditIndex = i;
    console.log(i, e);
  }

  constructor() { }

  ngOnInit(): void {
  }
  saveSegment(row: any){
    console.log(row.id);
    console.log(row.amount)
    this.enableEdit=false

  }

}
