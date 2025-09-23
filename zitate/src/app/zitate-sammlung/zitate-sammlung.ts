import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-zitate-sammlung',
  standalone: true,
  imports: [],
  templateUrl: './zitate-sammlung.html',
  styleUrl: './zitate-sammlung.css'
})
export class ZitateSammlung implements OnInit {
   id: string | null = "";
    zitate = [
      {
        id: 1,
        name:"Ida",
        zitat: "Ida auch komm mit",
        jahr: 2023,
      },
       {
        id: 2,
        name:"Ida",
        zitat: "Das dauert voll langweilig",
        jahr: 2024,
      },
      {
        id: 3,
        name:"Ida",
        zitat: "Guck mal da sind Meerjungsfrauen drauf",
        jahr: 2024,
      },
      {
        id: 4,
        name:"Ida",
        zitat: "jetzt oder doch",
        jahr: 2024,
      },
      {
        id: 5,
        name:"Ida",
        zitat: "Schade leider",
        jahr: 2024,
      },
      {
        id: 6,
        name:"Ida",
        zitat: "baiabaia",
        jahr: 2025,
      },
       {
        id: 7,
        name:"Ida",
        zitat: "Das sag ich meiner Oma!",
        jahr: 2025,
      },
       {
        id: 8,
        name:"Albert",
        zitat: "Albert malern",
        jahr: 2025,
      },
       {
        id: 9,
        name:"Albert",
        zitat: "it das, ... rum",
        jahr: 2025,
      },
    ]



    zitat: {id: number; name: string; zitat: string; jahr: number; } | null = null;
     
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