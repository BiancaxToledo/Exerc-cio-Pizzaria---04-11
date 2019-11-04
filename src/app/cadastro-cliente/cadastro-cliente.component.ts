import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'has-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {
  
  formCliente: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formCliente = this.formBuilder.group({
      Chopp : this.formBuilder.control(''),
      Pizza : this.formBuilder.control(''),
      Recheio : this.formBuilder.control(''),
      Pessoas : this.formBuilder.control('')
      })
  }
  onSubmit() {
    console.log(this.formCliente.value);
    }

}
