import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Customers } from 'src/models/customers';
import { Orders } from 'src/models/orders';
import { CustomerClientService } from 'src/services/customerclientservice';
import { OrderClientService } from 'src/services/orderclientservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  customersData: Array<Customers>;
  ordersData:Array<Orders>;
  // Inject Angular Services
  constructor(
    private custServ:CustomerClientService, private ordServ:OrderClientService
  ){
    this.customersData = new Array<Customers>();
    this.ordersData = new Array<Orders>();
  }

  ngOnInit(): void {
    // Receive Observables
    const customers$ = this.custServ.get();
    const orders$ = this.ordServ.get();
    // Resolve these observables to read emited data
    // from Bbservables
    forkJoin([customers$,orders$]).subscribe(result=>{
      // read the emitted data from the received
      // Observables
       this.customersData = result[0];
       this.ordersData = result[1];
    });
  }
}
