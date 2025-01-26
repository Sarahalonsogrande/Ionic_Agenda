import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonList, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton } from '@ionic/angular/standalone';
import { TareasManagerService } from 'src/app/services/tareas-manager.service';
import { Tarea } from 'src/app/interfaces/tarea';

@Component({
  selector: 'app-todas-tareas',
  templateUrl: './todas-tareas.page.html',
  styleUrls: ['./todas-tareas.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonList, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton]
})
export class TodasTareasPage implements OnInit {
  tareas: Tarea[] = [];

  constructor(private tareasManagerService: TareasManagerService) {}

  ngOnInit() {
    this.tareasManagerService.getTareas().subscribe(tareas => {
      this.tareas = tareas;
    });
  }

  eliminarTarea(id: number) {
    this.tareasManagerService.eliminarTarea(id);
  }
}
