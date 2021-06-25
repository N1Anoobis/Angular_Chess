import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Piece } from 'src/interfaces';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent implements OnInit {
  @Input()
  board: any;
  flatBoard!: Piece[];
  constructor() {}

  ngOnInit(): void {
    console.log(this.board)
    this.flatBoard = this.board!.flat();
  }

  isBlack(i: number): boolean {
    const x = i % 8;
    const y = Math.abs(Math.floor(i / 8) - 7);
    return (x + y) % 2 === 1;
  }
}
