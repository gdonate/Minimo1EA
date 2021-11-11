import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';
import { UsuarioService } from '../services/usuario.service';
//import { debug } from 'console';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  usuario: Usuario;
  id: String;
  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.usuarioService.getUsuario(this.id).subscribe(data =>{
      this.usuario = data;
      this.usuarioForm = this.formBuilder.group({
        id: [this.usuario.id, [Validators.required, Validators.nullValidator]],
        username: [this.usuario.username, [Validators.required, Validators.nullValidator]],
        password: [this.usuario.password, [Validators.required, Validators.nullValidator]],
        email: [this.usuario.email, [Validators.required, Validators.nullValidator]]
      });
    })
  }

  get formControls(){
    return this.usuarioForm.controls;
  }

  atras(){
    console.log("Hello");

    this.router.navigateByUrl('/principal');
  }

  modificarUsuario(){
    if(this.usuarioForm.invalid){
      return;
    }
    const id = this.usuarioForm.value.id;
    const username = this.usuarioForm.value.username;
    const password = this.usuarioForm.value.password;
    const email = this.usuarioForm.value.email;

    const usuariomodificado = {'id': id, 'username': username, 'password': password, 'email': email};
    this.usuarioService.modificarUsuario(usuariomodificado, this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.router.navigateByUrl('/principal');
    })
  }

  deleteUsuario(){
    const id = this.usuarioForm.value.id;
    console.log(id);
    this.usuarioService.eliminarUsuario(id).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    });
  }

}
