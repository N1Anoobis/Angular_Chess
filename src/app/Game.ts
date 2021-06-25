import * as ChessJS from "chess.js";

const Chess = typeof ChessJS === "function" ? ChessJS : ChessJS.Chess;

const chess = new Chess();

import { BehaviorSubject } from 'rxjs';

export const gameSubject = new BehaviorSubject({
  board: chess.board(),
});
