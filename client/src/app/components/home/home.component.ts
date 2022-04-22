import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Games } from 'src/app/shared/games';
import { GamesService } from 'src/app/shared/games.service';

// import { Games } from '../../games';
// import { GamesService } from '../../games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private gameservice: GamesService, private route: Router) { }

  allgames = this.gameservice.getGames();
  // games: = [];

  searchString:string = ""; 

  ngOnInit(): void {
  }

  fetchGames(){
    this.gameservice.getAllGames().subscribe((res:{}) =>{
      console.log(res)
      // this.games = res;
    } )
  }
showGame(game:Games){
  this.gameservice.setViewGame(game);
  console.log(this.gameservice.getAllGames());

  this.route.navigate(['viewGame']);
}

addtoWishlist(game: Games){
  this.gameservice.addToWishlist(game);
}

search(): void {
  if(this.searchString=="") {
    this.allgames = this.gameservice.getGames();
  }
  else {
    this.allgames = this.allgames.filter(game => game.name.toLowerCase().includes(this.searchString.toLowerCase()));
    if(this.allgames.length==0) {
      alert("No Game found");
    }
  }
}

reset(): void {
  this.searchString = "";
  this.allgames = this.gameservice.getGames();
}


}
