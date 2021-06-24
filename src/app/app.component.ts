import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { gameSubject } from './Game';
// import { BoardComponent } from './board/board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  board: unknown[] = [];
  subscribe!: Subscription;
  ngOnInit(): void {
    this.subscribe = gameSubject.subscribe((game) => {
      this.board = game.board;
    });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe()
  }
}
