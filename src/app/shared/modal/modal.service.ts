import { Injectable } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {ModalComponent} from './modal.component';
import {Observable} from 'rxjs';

@Injectable()
export class ModalService {
  private dialogRef: MdDialogRef<ModalComponent>;

  constructor(public dialog: MdDialog) { }

  public openDialog(effectiveStartDate: string): Observable<any> {
    this.dialogRef = this.dialog.open(ModalComponent);
    this.dialogRef.componentInstance.effectiveStartDate = effectiveStartDate;
    return this.dialogRef.afterClosed();
  }

  public closeDialog() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

}
