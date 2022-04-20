import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/shared/games.service';
// import { GamesService } from '../games.service';

@Component({
  selector: 'app-view-game',
  templateUrl: './view-game.component.html',
  styleUrls: ['./view-game.component.css']
})
export class ViewGameComponent implements OnInit {

  constructor(private gameservice: GamesService) { }

  viewGame = this.gameservice.getViewGame();
  image = this.gameservice.getViewURL();

  ngOnInit(): void {
    console.log(this.image);
  }

}