import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-zitate',
  standalone: true,
  imports: [],
  templateUrl: './zitate.html',
  styleUrl: './zitate.css'
})
export class Zitate implements OnInit {
   id: string | null = " ";
    zitate = [
      {
        id: 1,
        name:"Ida",
        zitat: "",
        jahr: 2023,
      },
       {
        id: 2,
        name:"Ida",
        zitat: "",
        jahr: 2023,
      },
      {
        id: 3,
        name:"Ida",
        zitat: "",
        jahr: 2023,
      },
      {
        id: 4,
        name:"Ida",
        zitat: "",
        jahr: 2023,
      },
      {
        id: 5,
        name:"Ida",
        zitat: "",
        jahr: 2024,
      },
       {
        id: 6,
        name:"Albert",
        zitat: "",
        jahr: 2025,
      },
       {
        id: 7,
        name:"Albert",
        zitat: "",
        jahr: 2025,
      },
       {
        id: 8,
        name:"Albert",
        zitat: "",
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



