import { Component } from '@angular/core';

@Component({
  selector: 'app-tris',
  templateUrl: './tris.component.html',
  styleUrls: ['./tris.component.css'],
})
export class TrisComponent {
  box: string[] = ['', '', '', '', '', '', '', '', ''];
  turn: number = 0;
  win: string = '';
  winner: boolean = false;

  press(i: number) {
    if (this.box[i] == '') {
      if (this.turn % 2 == 0) {
        //GIOCATORE 1
        this.box[i] = '×';
      } else {
        //GIOCATORE 2
        this.box[i] = 'o';
      }

      this.win = this.check();
      if (this.win != '') {
        this.gameover(this.win);
      }
      this.turn++;
    }
  }
  reset() {
    for (let i = 0; i < this.box.length; i++) {
      this.box[i] = '';
      this.turn = 0;
    }
    this.winner = false;
  }

  check(): string {
    //RIGA1
    if (
      this.box[0] == this.box[1] &&
      this.box[1] == this.box[2] &&
      this.box[0] != ''
    ) {
      return this.box[0];
    }
    //RIGA2
    if (
      this.box[3] == this.box[4] &&
      this.box[4] == this.box[5] &&
      this.box[3] != ''
    ) {
      return this.box[3];
    }
    //RIGA3
    if (
      this.box[6] == this.box[7] &&
      this.box[7] == this.box[8] &&
      this.box[6] != ''
    ) {
      return this.box[6];
    }

    //COLONNA1
    if (
      this.box[0] == this.box[3] &&
      this.box[3] == this.box[6] &&
      this.box[0] != ''
    ) {
      return this.box[0];
    }
    //COLONNA2
    if (
      this.box[1] == this.box[4] &&
      this.box[4] == this.box[7] &&
      this.box[1] != ''
    ) {
      return this.box[1];
    }
    //COLONNA3
    if (
      this.box[2] == this.box[5] &&
      this.box[5] == this.box[8] &&
      this.box[2] != ''
    ) {
      return this.box[2];
    }

    //DIAGONALE1
    if (
      this.box[0] == this.box[4] &&
      this.box[4] == this.box[8] &&
      this.box[0] != ''
    ) {
      return this.box[0];
    }
    //Diagonale2
    if (
      this.box[2] == this.box[4] &&
      this.box[4] == this.box[6] &&
      this.box[2] != ''
    ) {
      return this.box[2];
    }

    return '';
  }
  gameover(win: string) {
    this.reset();
    this.winner = true;
    this.box[0] = '.';
    this.box[1] = win;
    this.box[2] = '.';
    this.box[3] = 'W';
    this.box[4] = 'I';
    this.box[5] = 'N';
    this.box[6] = '.';
    this.box[7] = '.';
    this.box[8] = '.';
  }
}
