import { Injectable } from '@angular/core';
import { Games } from './games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  game: Games[] = [{name:"Elden Ring",descp:"Adventure Game", url:"./assets/images/Elden Ring.jpg"},
  {name:"Grand Theft Auto V",descp:"Adventure Game", url:"./assets/images/Grand Theft Auto V.jpg"},
  {name:"Valorant",descp:"FPP Shooting Game" , url:"./assets/images/Valorant.jpg"},
  {name:"Apex Legends",descp:"FPP Shooting Game", url:"./assets/images/Apex Legends.jpg"},
  {name:"CSGO",descp:"FPP Shooting Game", url:"./assets/images/CSGO.jpg"},
  {name:"FIFA 2022",descp:"Sports Game", url:"./assets/images/FIFA 2022.jpg"},
  ]

  constructor() { }

  getGames():Games[]{
    return this.game;
  }

}
