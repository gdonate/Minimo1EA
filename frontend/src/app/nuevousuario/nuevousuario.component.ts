import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-nuevousuario',
  templateUrl: './nuevousuario.component.html',
  styleUrls: ['./nuevousuario.component.css']
})
export class NuevousuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.nullValidator]],
      username: ['', [Validators.required, Validators.nullValidator]],
      password: ['', [Validators.required, Validators.nullValidator]],
      email: ['', [Validators.required, Validators.nullValidator]]
    });
  }

  get formControls(){
    return this.usuarioForm.controls;
  }

  addusuario(): void{
    if(this.usuarioForm.invalid){
      return;
    }
    const id = this.usuarioForm.value.id;
    const username = this.usuarioForm.value.username;
    const password = this.usuarioForm.value.password;
    const email = this.usuarioForm.value.email;

    console.log(email);


    const usuario = {'id': id, 'username': username, 'password': password, 'email': email};
    this.usuarioService.addUsuario(usuario).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    })
  }

  atras(){
    this.router.navigateByUrl('/principal');
  }

}
