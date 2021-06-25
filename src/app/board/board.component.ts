import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent implements OnInit {
@Input() board: any
flatBoard: any
  constructor() { }

  ngOnInit(): void {
    this.flatBoard = this.board.flat()
  }
}
