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
      label_campo: 'nombre',
      tipo_campo: 'text',
      valor_campo: 'Miriam'
    },
    {
      label_campo: 'edad',
      tipo_campo: 'number',
      valor_campo: 22 
    },
    {
      label_campo: 'sexo',
      tipo_campo: 'text',
      valor_campo: 'Femenino'
    },
    {
      label_campo: 'ocupacion',
      tipo_campo: 'text',
      valor_campo: 'Desarrollo de software'
    }],

    [{
      label_campo: 'nombre',
      tipo_campo: 'text',
      valor_campo: 'Susana'
    },
    {
      label_campo: 'edad',
      tipo_campo: 'number',
      valor_campo: 50 
    },
    {
      label_campo: 'sexo',
      tipo_campo: 'text',
      valor_campo: 'Femenino'
    },
    {
      label_campo: 'ocupacion',
      tipo_campo: 'text',
      valor_campo: 'Contadora'
    }],
    
    [{
      label_campo: 'nombre',
      tipo_campo: 'text',
      valor_campo: 'Diego'
    },
    {
      label_campo: 'edad',
      tipo_campo: 'number',
      valor_campo: 30 
    },
    {
      label_campo: 'sexo',
      tipo_campo: 'text',
      valor_campo: 'Masculino'
    },
    {
      label_campo: 'ocupacion',
      tipo_campo: 'text',
      valor_campo: 'Psicologo'
    }]
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
