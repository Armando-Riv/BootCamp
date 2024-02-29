import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primer-dia',
  standalone: true,
  imports: [],
  templateUrl: './primer-dia.component.html',
  styleUrl: './primer-dia.component.scss'
})
export class PrimerDiaComponent {
  @Input()ejemplo:string='';
    title = 'prueba';
    description='DESCRIPCION';
  
    card ={
      title: 'Prueba 2',
      description:'Prueba decsripcion'
    }
  }

