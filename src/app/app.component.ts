import { getLocaleEraNames } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PrimerDiaComponent } from './primer-dia/primer-dia.component';
import { SegundoDiaComponent } from './segundo-dia/segundo-dia.component';
import { TercerDiaComponent } from './tercer-dia/tercer-dia.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PrimerDiaComponent,SegundoDiaComponent,TercerDiaComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  dinamico='Titulo';
  title = 'prueba';
    description='DESCRIPCION';
  
    card ={
      title: 'Prueba 2',
      description:'Prueba decsripcion'
  }
  
}
