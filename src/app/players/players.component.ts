import { Component, OnInit } from '@angular/core';

import { Player } from '../players/player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Player[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers(): void {
    this.playerService.getPlayers()
    .subscribe(players => this.players = players);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.playerService.addPlayer({ name } as Player)
      .subscribe(player => {
        this.players.push(player);
      });
  }
}