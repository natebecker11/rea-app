import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent {
  constructor(
    private _dialog: MatDialogRef<QrCodeComponent>
  )
  {

  }

  Done()
  {
    this._dialog.close()
  }
}
