import { Component, OnInit, Input, NgModule} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Persona } from './app.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Servicio'

  persona=[
    [{
      label_campo: 'Nombre:',
      tipo_campo: 'text',
      valor_campo: 'Miriam'
    },
    {
      label_campo: 'Edad:',
      tipo_campo: 'number',
      valor_campo: 22 
    },
    {
      label_campo: 'Sexo:',
      tipo_campo: 'text',
      valor_campo: 'Femenino'
    },
    {
      label_campo: 'Ocupacion:',
      tipo_campo: 'text',
      valor_campo: 'Desarrollo de software'
    }],
    
    [{
      label_campo: 'Nombre:',
      tipo_campo: 'text',
      valor_campo: 'Diego'
    },
    {
      label_campo: 'Edad:',
      tipo_campo: 'number',
      valor_campo: 30 
    },
    {
      label_campo: 'Sexo:',
      tipo_campo: 'text',
      valor_campo: 'Masculino'
    },
    {
      label_campo: 'Ocupacion:',
      tipo_campo: 'text',
      valor_campo: 'Psicologo'
    }]
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
