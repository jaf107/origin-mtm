import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Games } from './games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  game: Games[] = [];

  endpoint: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(private http: HttpClient, public router: Router) { }

//   getAllGames(){
//     let api = `${this.endpoint}/games`;
//     console.log(this.http.get<any>(api).subscribe(data => {
//         this.games = data.total;
//   }))
// }


  getAllGames(): Observable<any> {
    return this.http.get('http://localhost:4000/api/games');
  }

  setGamesfromAPI(games: Games[]){
    this.game = games;
  }


  gameToView = new Games();

  wishListGames: Games[] = [];


  setViewGame(game: Games) {
    this.gameToView = game;
  }

  getViewGame(): Games {
    return this.gameToView;
  }

  getViewURL(): string {
    return this.gameToView.url;
  }

  addToWishlist(gametoadd: Games){
    if(gametoadd.addedWishlist){
      gametoadd.addedWishlist = false;
      this.wishListGames=this.wishListGames.filter(Games => Games.name!=gametoadd.name);
    }
    else{
      gametoadd.addedWishlist = true;
      this.wishListGames.push(gametoadd);
    }
  }

  getWishlist(): Games[]{
    return this.wishListGames;
  }

}
