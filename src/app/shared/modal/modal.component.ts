import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from "@angular/router";
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  formGroup: FormGroup;
  zipCodes: number[] = [21111, 21112, 21113, 20129, 12345];
  ccns: number[] = [123456, 544541, 485485, 789456, 485648];
  orgTypes: string[] = ['Org type 1', 'Org type 1', 'Org type 1', 'Org type 1', 'Org type 1', 'Org type 1'];
  cities: string[] = ['Baltimore', 'Owings Mills', 'Towson', 'Columbia'];
  npis: string[] = ['NPI 1', 'NPI 1', 'NPI 1', 'NPI 1', 'NPI 1'];
  states: string[] = ['State 1', 'State 1', 'State 1', 'State 1', 'State 1'];
  countries: string[] = ['Country 1', 'Country 1', 'Country 1', 'Country 1', 'Country 1'];
  tins: string[] = ['TIN 1', 'TIN 1', 'TIN 1', 'TIN 1', 'TIN 1'];
  effectiveStartDate: string;
  disableContinueBtn: boolean = true;

  constructor(public fb: FormBuilder, private router: Router, private sharedService: SharedService) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      'zipCode' : [],
      'ccn' : [], 'city' : [], 'orgType' : [], 'country' : [], 'state' : [], 'npi' : [], 'tin' : [], 'orgName' : []
    });
  }
  getObj() {
    this.sharedService.setSelectedOrg({
      zipCode: this.formGroup.get('zipCode').value,
      ccn: this.formGroup.get('ccn').value,
      city: this.formGroup.get('city').value,
      orgType: this.formGroup.get('orgType').value,
      country: this.formGroup.get('country').value,
      state: this.formGroup.get('state').value,
      npi: this.formGroup.get('npi').value,
      tin: this.formGroup.get('tin').value,
      orgName: this.formGroup.get('orgName').value
    });
    this.sharedService.setShowTable(true);
  }
}
