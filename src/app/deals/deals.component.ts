import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {
  ngOnInit(): void
  {
    setTimeout(() => {
      this.IsLoaded = true
    }, 2000)
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