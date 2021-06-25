import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Piece } from 'src/interfaces';

@Component({
  selector: 'app-board-square',
  templateUrl: './board-square.component.html',
  styleUrls: ['./board-square.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardSquareComponent implements OnInit {
  @Input()
  piece!: Piece;
  @Input()
  isBlack!: boolean;
  constructor() { }

  ngOnInit(): void {
  }
}
