import { Component, OnInit, Input, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Persona } from './app.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Servicio'

  persona:Array<any> = [{  
    nombre: 'Miriam',
    edad: 18,
    sexo: 'Mujer',
    interes:'Programar'
    },
    {
      nombre: 'Susana',
      edad: 45,
      sexo: 'Mujer',
      interes:'Contabilidad'
    },
    {
      nombre: 'Diego',
      edad: 29,
      sexo: 'Hombre',
      interes:'Leer'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
