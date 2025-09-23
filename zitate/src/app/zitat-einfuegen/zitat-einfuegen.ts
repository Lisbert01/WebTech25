import { Component } from '@angular/core';

@Component({
  selector: 'app-zitat-einfuegen',
  imports: [],
  templateUrl: './zitat-einfuegen.html',
  styleUrl: './zitat-einfuegen.css'
})
export class ZitatEinfuegen {
 zitate: string[] = [];
  neuesZitat: string = '';

  zitatHinzufuegen() {
    if (this.neuesZitat.trim()) {
      this.zitate.push(this.neuesZitat.trim());
      this.neuesZitat = '';
    }
  }
}
