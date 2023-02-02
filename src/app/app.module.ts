import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CombineProductsComponent } from './app.combineproducts.component';

import { AppComponent } from './app.component';
import { TableComponent } from './app.table.component';

@NgModule({
  declarations: [
    AppComponent, TableComponent, CombineProductsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [CombineProductsComponent]
})
export class AppModule { }
