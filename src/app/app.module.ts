import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoleRequestComponent } from './role-request/role-request.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import {appRouting} from './app-routing.module';
import {TopNavCompModule} from '@eqrs/top-nav-comp';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MdAutocompleteModule, MdInputModule, MdDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModalComponent } from './shared/modal/modal.component';
import {DynamicDatatableModule} from '@eqrs/datatable';
import {SharedService} from './shared/shared.service';
import {OrgService} from '@eqrs/org';
import {AlertMessageModule} from '@eqrs/common';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RoleRequestComponent,
    ConfirmationComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    appRouting,
    TopNavCompModule,
    MdAutocompleteModule,
    MdInputModule,
    MdDialogModule,
    DynamicDatatableModule,
    AlertMessageModule,
    CommonModule,
    NgbModule.forRoot()
  ],
  providers: [SharedService, OrgService],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
