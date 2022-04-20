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

  ngOnInit(): void {
  }

  
showGame(game:Games){
  this.gameservice.setViewGame(game);
  this.route.navigate(['viewGame']);
}


}
