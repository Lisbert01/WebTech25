import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-zitat-hinzufuegen',
  standalone: true,
  imports: [],
  templateUrl: './zitat-hinzufuegen.html',
  styleUrl: './zitat-hinzufuegen.css'
})
export class ZitatHinzufuegen implements OnInit {
   id: string | null = "";
    zitate = [
      {
        id: 1,
        zitat: "Ida auch komm mit!",
        jahr: 2024,
      },
       {
        id: 2,
        zitat: "Das dauert mir zu langweilig",
        jahr: 2024,
      },
      {
        id: 3,
        zitat: "Guck mal, da sind Meerjungsfrauen drauf",
        jahr: 2024,
      },
      {
        id: 4,
        zitat: "jetzt oder doch?",
        jahr: 2024,
      },
      {
        id: 5,
        zitat: "Schade leider",
        jahr: 2024,
      },
      { 
        id: 6,
        zitat: "baiabaia",
        jahr: 2025,
      },
       {
        id: 7,
        zitat: "Das sag ich meiner Oma!",
        jahr: 2025,
      },
      {
        id: 8,
        zitat: "aufgewachen angelachen ",
        jahr: 2024,
      },
    ]



    zitat: {id: number; zitat: string; jahr: number; } | null = null;
     
    constructor(private route: ActivatedRoute) {

    }
      ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');
        if(this.id) this.filterZitate();
        else console.log('ohne Parameter');
      }

        filterZitate(): void {
         if(this.id) {
        this.zitat = this.zitate[Number(this.id)];
        console.log('zitat : ', this.zitat)
    }
  }
}



/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-zitate-sammlung',
  imports: [],
  templateUrl: './zitate-sammlung.html',
  styleUrl: './zitate-sammlung.css'
})
export class ZitateSammlung {

}

*/