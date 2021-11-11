import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GrupoinvestigacionService } from '../services/grupoinvestigacion.service';

@Component({
  selector: 'app-nuevogrupo',
  templateUrl: './nuevogrupo.component.html',
  styleUrls: ['./nuevogrupo.component.css']
})
export class NuevogrupoComponent implements OnInit {

  grupoinvestigacionForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private grupoService: GrupoinvestigacionService, private router: Router) { }

  ngOnInit(): void {
    this.grupoinvestigacionForm = this.formBuilder.group({
      nombregrupo: ['', [Validators.required, Validators.nullValidator]],
      id: ['', [Validators.required, Validators.nullValidator]],
      descripcion: ['', [Validators.required, Validators.nullValidator]],
      responsable: ['', [Validators.required, Validators.nullValidator]],
      url: ['', [Validators.required, Validators.nullValidator]]
    });
  }

  get formControls(){
    return this.grupoinvestigacionForm.controls;
  }

  addgrupo(): void{
    if(this.grupoinvestigacionForm.invalid){
      return;
    }
    const nombregrupo = this.grupoinvestigacionForm.value.nombregrupo;
    const id = this.grupoinvestigacionForm.value.id;
    const descripcion = this.grupoinvestigacionForm.value.descripcion;
    const responsable = this.grupoinvestigacionForm.value.responsable;
    const url = this.grupoinvestigacionForm.value.url;

    console.log(url);

    const grupoinvestigacion = {'nombregrupo': nombregrupo, 'id': id, 'descripcion': descripcion, 'responsable': responsable, 'url': url};
    this.grupoService.addGrupo(grupoinvestigacion).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    })
  }

  atras(){
    this.router.navigateByUrl('/principal');
  }

}
