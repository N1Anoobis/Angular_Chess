import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-square',
  templateUrl: './board-square.component.html',
  styleUrls: ['./board-square.component.scss']
})
export class BoardSquareComponent implements OnInit {
  @Input() piece: any
  @Input()
  isBlack!: boolean;
  constructor() { }

  ngOnInit(): void {
  }
}
