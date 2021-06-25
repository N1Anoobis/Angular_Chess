import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Piece } from 'src/interfaces';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SquareComponent implements OnInit {
@Input() piece!: Piece
  constructor() { }

  ngOnInit(): void {
  }

}
