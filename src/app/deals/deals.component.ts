import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QrCodeComponent } from '../qr-code/qr-code.component';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit
{
  OnClickQR()
  {
    this._dialog.open(QrCodeComponent).afterClosed().subscribe({
      next: () =>
      {

      }
    })
  }
  ngOnInit(): void
  {
    setTimeout(() =>
    {
      this.IsLoaded = true
    }, 2000)
  }

  constructor(private _dialog: MatDialog)
  {

  }
  Deals: Deal[] = [
    {
      imageUrl: "https://i.imgur.com/zoEKuKJ.jpeg",
      name: "Beach Blowout Bonanza",
      desc: "This deal applies to anyone who feels easy and breezy at the beach"
    },

    {
      imageUrl: "https://i.imgur.com/zoEKuKJ.jpeg",
      name: "Beach Blowout Bonanza",
      desc: "This deal applies to anyone who feels easy and breezy at the beach"
    },
    {
      imageUrl: "https://i.imgur.com/zoEKuKJ.jpeg",
      name: "Beach Blowout Bonanza",
      desc: "This deal applies to anyone who feels easy and breezy at the beach"
    }
  ]
  IsLoaded = false;
}

type Deal =
  {
    imageUrl: string,
    name: string,
    desc: string
  }