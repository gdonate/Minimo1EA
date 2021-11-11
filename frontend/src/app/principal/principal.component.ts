import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';
import { GrupoinvestigacionService } from '../services/grupoinvestigacion.service';
import { UsuarioService } from '../services/usuario.service';
import { GrupoInvestigacion } from '../models/grupoinvestigacion';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {


  grupos: GrupoInvestigacion[];
  usuarios : Usuario[];

  constructor(private router: Router, private grupoService : GrupoinvestigacionService, private usuarioService : UsuarioService) { }

  ngOnInit(): void {

    this.grupoService.getGrupos().subscribe(data =>{
      this.grupos = data;
      console.log(this.grupos);
    })

    this.usuarioService.getUsuarios().subscribe(data =>{
      this.usuarios = data;
      console.log(this.usuarios);
    })
  }
  

  nuevoGrupo(){
    this.router.navigateByUrl('/nuevogrupo');
  }

  nuevoUsuario(){
    this.router.navigateByUrl('/nuevousuario');
  }

}
