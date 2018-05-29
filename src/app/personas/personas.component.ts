import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import {PERSONAS} from '../mock-personas';

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
  //hay que colocar el tipo
  personas:Persona[] = PERSONAS;

  constructor() { }

  ngOnInit() {
    
  }

  selectedPersona: Persona;

  onSelect(persona: Persona): void{
    this.selectedPersona = persona;
  }
 

}
