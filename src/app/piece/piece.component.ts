import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Piece } from 'src/interfaces';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieceComponent implements OnInit {
  @Input() piece!: Piece;
  constructor() {}

  ngOnInit(): void {
    console.log(this.piece ? this.piece.type : null);
  }

  display() {
    this.piece ? this.piece.type : '';
  }
}
