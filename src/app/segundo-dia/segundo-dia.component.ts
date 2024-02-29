import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-segundo-dia',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './segundo-dia.component.html',
  styleUrl: './segundo-dia.component.scss'
})
export class SegundoDiaComponent {
variable='';
  name='';
  desc='';

formulariouser:FormGroup = new FormGroup({
name:new FormControl(''),
desc:new FormControl('')
  })

  
  user = [
    {
      name: 'luis',
      description: 'des 1'
    },
    {
      name: 'lui2',
      description: 'des 3'
    },
    {
      name: 'lui4',
      description: 'des 5'
    },

]
  

constructor(){
  console.log("se ejecuto el constructor")
}

ngOnInit(){
  console.log("se inicio el componente")
}

ngDoCheck(){
console.log("se ejecuto el doCheck")
}

ngOnDestroyk(){
  console.log("se ejecuto el doDestroy")
  }

clickButton(text:string){
  this.variable=text;
  console.log("valor",text)
}

submitForm(){
console.log(this.formulariouser.value)
}
}


