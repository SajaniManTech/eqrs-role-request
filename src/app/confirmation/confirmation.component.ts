import { Component, OnInit } from '@angular/core';
import {SharedService} from "../shared/shared.service";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    console.log(this.sharedService.getSelectedOrg());
  }

}
