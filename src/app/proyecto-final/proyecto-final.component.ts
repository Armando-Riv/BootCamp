import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormRecord, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { map } from 'rxjs';


@Component({
  selector: 'app-proyecto-final',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule,GoogleMapsModule],
  templateUrl: './proyecto-final.component.html',
  styleUrl: './proyecto-final.component.scss'
})
export class ProyectoFinalComponent {
  usuarios: any = []
  id:any=[]

  position: any ={}
   formulariouser:FormGroup = new FormGroup({
    name: new FormControl(''),
     description: new FormControl(''),
     id: new FormControl('')
   })
name=''
description=''
ubicacion=''


getcoords(event:any){
  this.position = {
  lat: event.latLng.lat(),
  lng: event.latLng.lng(),
  }
}
submitForm(){
  let obj={
  ...this.formulariouser.value, 
  position: this.position,
  
  
  }
  this.usuarios.push(obj);

// this.formulariouser.controls['name'].disable()
// console.log( );
console.log(this.formulariouser.value);
} 
sendData(index:number){
console.log(this.usuarios(index))

}
}