import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-buscar-tareas',
  templateUrl: './buscar-tareas.page.html',
  styleUrls: ['./buscar-tareas.page.scss'],
  standalone: true,
  imports: [IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BuscarTareasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
