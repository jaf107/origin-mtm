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

  showingGames:any;

  searchString:string = ""; 

  AllGames= new Array<Games>();

  ngOnInit(): void {
    this.gameservice.getAllGames().subscribe(res=>{
      console.log(res.db);
      this.AllGames = res.db;
      this.showingGames = this.AllGames;
      this.gameservice.setGamesfromAPI(this.AllGames);
    }, err=>{console.log(err)});
  }

  
showGame(game:Games){
  this.gameservice.setViewGame(game);
  this.route.navigate(['viewGame']);
}

addtoWishlist(game: Games){
  this.gameservice.addToWishlist(game);
}

search(): void {
  if(this.searchString=="") {
    this.showingGames = this.AllGames;
  }
  else {
    this.showingGames = this.AllGames.filter(game => game.name.toLowerCase().includes(this.searchString.toLowerCase()));
    if(this.showingGames.length==0) {
      alert("No Game found");
    }
  }
}

reset(): void {
  this.searchString = "";
  this.showingGames = this.AllGames;
}


}
