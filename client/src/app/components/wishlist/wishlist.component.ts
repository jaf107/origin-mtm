import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from 'src/app/shared/games.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private gameservice: GamesService, private route: Router) { }

  allgames= this.gameservice.getWishlist();

  ngOnInit(): void {
    console.log(this.allgames);
  }

}
