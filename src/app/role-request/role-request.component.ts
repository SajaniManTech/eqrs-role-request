import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {map, startWith} from "rxjs/operators";

import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-role-request',
  templateUrl: './role-request.component.html',
  styleUrls: ['./role-request.component.css']
})
export class RoleRequestComponent implements OnInit {
  form: FormGroup;
  zipCodes: number[] = [21111, 21112, 21113, 20129, 12345];
  ccns: number[] = [123456, 544541, 485485, 789456, 485648];
  orgTypes: string[] = ['Org type 1', 'Org type 1', 'Org type 1', 'Org type 1', 'Org type 1', 'Org type 1'];
  cities: string[] = ['Baltimore', 'Owings Mills', 'Towson', 'Columbia'];
  npis: string[] = ['NPI 1', 'NPI 1', 'NPI 1', 'NPI 1', 'NPI 1'];
  states: string[] = ['State 1', 'State 1', 'State 1', 'State 1', 'State 1'];
  countries: string[] = ['Country 1', 'Country 1', 'Country 1', 'Country 1', 'Country 1'];
  tins: string[] = ['TIN 1', 'TIN 1', 'TIN 1', 'TIN 1', 'TIN 1'];
  isLoading: boolean = false;
  filteredOptions: Observable<string[]>;
  filteredOptionsZip: Observable<string[]>;
  options: any = ['Prescott dialysis | 232687 | 1657156452', 'Cypress creek dialysis | 242518 | 7845644851', 'Amery dialysis of davita | 232551 | 7894511178'];
  zips: any[] = ['21111', '12354', '43244', '98765', '99999', '76768'];
  tableData: any[] = [];
  showNetwork: boolean = false;
  showOrgLookup: boolean = false;
  showNetworkColumn: boolean = false;
  showCcnNpiColumn: boolean = false;

  constructor(public fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      'zipCode' : [],
      'ccn' : [], 'city' : [], 'orgType' : [], 'country' : [], 'state' : [], 'npi' : [], 'tin' : [], 'orgName' : [], 'search': [],
      'approver': [], 'role': [], 'program': [], 'network' : [], 'zip' : []
    });
  }
  ngOnInit() {
    this.filteredOptions = this.form.get('search').valueChanges
      .pipe(
        map(value => this._filter(value))
      );
    this.filteredOptionsZip = this.form.get('zip').valueChanges
      .pipe(
        map(value => this._filterZip(value))
      );
    this.form.get('orgType').valueChanges.subscribe((value) => {
      if (value === 'Facility') {
        this.showOrgLookup = true;
        this.showNetwork = false;
      } else  if (value === 'Network') {
        this.showNetwork = true;
        this.showOrgLookup = false;
      } else if (value === 'CMS' || value === 'CMS support') {
        this.showOrgLookup = false;
      } else if (value === 'Corporation') {
        this.showOrgLookup = true;
        this.showNetwork = false;
      }
    });
  }
  private _filter(value: any): string[] {
     const filterValue = value.toLowerCase();
     return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  private _filterZip(value: any): any {
    const filterValue = value;
    return this.zips.filter(option => option.includes(filterValue));
  }
  removeItem(i) {
    this.tableData.splice(this.tableData.indexOf(i), 1);
  }
  addTableData() {

    if (this.form.get('orgType').value === 'Facility' || this.form.get('orgType').value === 'Corporation') {
      let arr = this.form.get('search').value.split('|');
      let orgName = arr[0];
      let ccn = arr[1];
      let npi = arr[2];
      this.showCcnNpiColumn = true;
      this.tableData.push({
        orgName: orgName, zipCode: 21117, program: this.form.get('program').value,
        role: this.form.get('role').value, CCN: ccn, NPI: npi, network: '-'
      });
    } else if (this.form.get('orgType').value === 'Network') {
      this.showNetworkColumn = true ;
      this.tableData.push({
        zipCode: 21117, program: this.form.get('program').value, orgName: this.form.get('orgType').value,
        role: this.form.get('role').value, network: this.form.get('network').value, CCN: '-', NPI: '-'
      });
    } else if (this.form.get('orgType').value === 'CMS' || this.form.get('orgType').value === 'CMS support') {
      this.tableData.push({
        zipCode: 21117, program: this.form.get('program').value, CCN: '-', NPI: '-', network: '-',
        role: this.form.get('role').value, orgName: this.form.get('orgType').value
      });
    }
  }
  resetForm() {
   this.form.get('approver').reset('');
   this.form.get('role').reset('');
   this.form.get('orgType').reset('');
   this.form.get('search').reset('');
   this.form.get('network').reset('');
   this.form.get('program').reset('');
   this.showOrgLookup = false;
   this.showNetwork = false;
  }
  onSubmit() {
    this.router.navigate(['/confirmation']);
  }
  // getBoldedSelection(text: string, searchVal: string) {
  //   searchVal = searchVal.trim();
  //   let html: string = text;
  //   if (text && searchVal && searchVal.length > 0) {
  //     if (text.toLowerCase().indexOf(searchVal.toLowerCase(), 0) > -1) {
  //       html = '';
  //       let prevIndex = 0;
  //       let index = text.toLowerCase().indexOf(searchVal.toLowerCase(), prevIndex);
  //       while (index > -1) {
  //         html += text.substring(prevIndex, index);
  //         html += '<b>' + text.substr(index, searchVal.length) + '</b>';
  //         prevIndex = index + searchVal.length;
  //
  //         index = text.indexOf(searchVal, prevIndex);
  //       }
  //       html += text.substr(prevIndex, text.length);
  //     }
  //   }
  //   return html;
  // }
}
