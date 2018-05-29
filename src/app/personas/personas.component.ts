import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  persona:Persona = {
    id:1,
    name: 'Laura',
    age: 25
  }


  constructor() { }

  ngOnInit() {
    
  }
 

}
