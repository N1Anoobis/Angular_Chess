import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
@Input() board: any
  constructor() { }

  ngOnInit(): void {
    console.log(this.board)
  }

}
