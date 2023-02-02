import { Component, OnInit } from '@angular/core';
import { combineLatest,map } from 'rxjs';
import { Product } from 'src/models/product';
import { ElectricalClientService } from 'src/services/electricalclientservice';
import { ElectronicsClientService } from 'src/services/electronicsclientservice';

@Component({
  selector: 'app-combineproduct-component',
  templateUrl: './app.combineproduct.view.html'
})
export class CombineProductsComponent implements OnInit {

  products:Array<Product>;

  constructor(private electronicsServ:ElectronicsClientService,
    private electricalServ:ElectricalClientService) {
      this.products = new Array<Product>();
    }

  ngOnInit(): void {
    // Get the Observables from the API calls
    combineLatest({
      electronicsProducts:this.electronicsServ.get(),
      electricalProducts:this.electricalServ.get()
    }).pipe(map(resp=>{
      // Process these Observables
      const electronicsProductsList = resp.electronicsProducts;
      const electricalProductsList = resp.electricalProducts;

      const productsList:Array<Product>=new Array<Product>();

      electronicsProductsList.map((product:Product)=>{
        productsList.push(product);
      });
      electricalProductsList.map((product:Product)=>{
        productsList.push(product);
      });
      console.log(`Combine Products ${JSON.stringify(productsList)}`);
      // Return the processed Observables
      return productsList;
    })).subscribe((data)=>{
      this.products = data;
    });
  }
}
