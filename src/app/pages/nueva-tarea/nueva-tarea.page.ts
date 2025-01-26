import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonSelect, IonSelectOption, IonDatetimeButton, IonModal, IonTextarea, IonItem, IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonDatetime, IonLabel } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Tarea, Criticidad } from 'src/app/interfaces/tarea';
import { TareasManagerService } from 'src/app/services/tareas-manager.service';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.page.html',
  styleUrls: ['./nueva-tarea.page.scss'],
  standalone: true,
  imports: [IonLabel, IonButton, IonSelect, IonSelectOption, IonDatetimeButton, IonModal, IonDatetime, IonTextarea, IonInput, IonItem, IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class NuevaTareaPage implements OnInit {

  tarea: Tarea = {
    nombre: '',
    descripcion: '',
    fechaLimite: '',
    criticidad: Criticidad.MEDIA,
    estado: 'Pendiente'
  };

  criticidades = Object.values(Criticidad);

  constructor(private tareasmanagerService: TareasManagerService) {
    this.tarea.estado = 'Pendiente';
    this.tarea.fechaLimite = new Date().toISOString();
  }

  ngOnInit() { }

  guardarTarea() {
    this.tareasmanagerService.agregarTarea(this.tarea);
    this.tarea = {
      nombre: '',
      descripcion: '',
      fechaLimite: '',
      criticidad: Criticidad.MEDIA,
      estado: 'Pendiente'
    };
  }

}
