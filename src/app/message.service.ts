import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private _snackBar: MatSnackBar) { }

  messages: string[] = [];

  openSnackBar(message: string) {
    this._snackBar.open(message, "", {
      duration: 2000,
    });
  }

  add(message: string) {
    this.messages.push(message);
    this.openSnackBar(message);
  }

  clear() {
    this.messages = [];
    this.openSnackBar("Clean");
  }

}
