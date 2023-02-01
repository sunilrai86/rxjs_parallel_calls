import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './app.table.view.html'
})

export class TableComponent implements OnInit {

  private _DataSource:Array<any>;
  tableColumns: Array<string>;
  constructor() {
    this._DataSource = new Array<any>();
    this.tableColumns = new Array<string>();
  }

  ngOnInit() {

  }

  @Input()
  set DataSource(val:Array<any>){
    this._DataSource = val;
    this.tableColumns = Object.keys(this._DataSource[0]);
      }

  get DataSource():Array<any>{
    return this._DataSource;
  }

}
