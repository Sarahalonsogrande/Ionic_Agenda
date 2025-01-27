import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton, IonBadge } from '@ionic/angular/standalone';
import { TareasManagerService } from 'src/app/services/tareas-manager.service';
import { Tarea, Criticidad } from 'src/app/interfaces/tarea';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-todas-tareas',
  templateUrl: './todas-tareas.page.html',
  styleUrls: ['./todas-tareas.page.scss'],
  standalone: true,
  imports: [IonBadge, IonButton, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton]
})
export class TodasTareasPage implements OnInit {

  tareas: Tarea[] = [];
  tareaAEliminar: Tarea | null = null;
  tareasCount: number = 0;  // Variable para contar las tareas

  constructor(
    private tareasManagerService: TareasManagerService,
    private alertController: AlertController  // Inyectar el AlertController
  ) {}

  ngOnInit() {
    this.tareasManagerService.getTareas().subscribe(tareas => {
      this.tareas = tareas;
      this.tareasCount = tareas.length;
    });
  }

  // Función para eliminar la tarea
  eliminarTarea(id: number) {
    this.tareasManagerService.eliminarTarea(id);
  }

  // Función para asignar el color de acuerdo con la criticidad
  obtenerColorCriticidad(criticidad: Criticidad | undefined): string {
    if (!criticidad) {
      criticidad = Criticidad.BAJA;
    }

    switch (criticidad) {
      case Criticidad.ALTA:
        return 'danger';
      case Criticidad.MEDIA:
        return 'warning';
      case Criticidad.BAJA:
        return 'success';
      default:
        return 'primary';
    }
  }

  // Función para mostrar la alerta de confirmación
  async mostrarAlerta(tarea: Tarea) {
    this.tareaAEliminar = tarea;

    const alert = await this.alertController.create({
      header: 'Confirmar Eliminación',
      message: `¿Estás seguro de eliminar la tarea "${tarea.nombre}"?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Eliminación cancelada');
          }
        },
        {
          text: 'Eliminar',
          role: 'confirm',
          handler: () => {
            if (this.tareaAEliminar) {
              this.eliminarTarea(this.tareaAEliminar.id!);  // Eliminar tarea
              console.log(`Tarea "${tarea.nombre}" eliminada`);
            }
          }
        }
      ]
    });

    await alert.present();
  }
}
