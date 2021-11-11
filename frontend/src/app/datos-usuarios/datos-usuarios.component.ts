import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-datos-usuarios',
  templateUrl: './datos-usuarios.component.html',
  styleUrls: ['./datos-usuarios.component.css']
})
export class DatosUsuariosComponent implements OnInit {

  @Input()
  usuario: Usuario;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  modificar(){
    this.router.navigate(['/' + this.usuario.id]);
  }

}
