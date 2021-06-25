import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { BoardSquareComponent } from './board-square/board-square.component';
import { SquareComponent } from './square/square.component';
import { PieceComponent } from './piece/piece.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardSquareComponent,
    SquareComponent,
    PieceComponent
  ],
  imports: [
    BrowserModule, DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
