import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SharedService {
  selectedOrg: any;
  showTable: boolean;

  constructor() { }
  setShowTable(val) {
    this.showTable = val;
  }
  getShowTable() { return this.showTable; }

  setSelectedOrg(state: any) {
    this.selectedOrg = state;
  }
  getSelectedOrg(): string {
    return this.selectedOrg;
  }
}
