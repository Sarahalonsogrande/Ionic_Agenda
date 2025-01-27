
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trashBinOutline, trashBinSharp, fileTrayFullOutline, fileTrayFullSharp, addCircleOutline, addCircleSharp, eyeOutline, eyeSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Nueva', url: '/nueva-tarea', icon: 'add-circle' },
    { title: 'Todas', url: '/todas-tareas', icon: 'file-tray-full' },
    { title: 'Buscar', url: '/buscar-tareas', icon: 'eye' },
    { title: 'Archivadas', url: '/tareas-archivadas', icon: 'archive' },
    { title: 'Borradas', url: '/tareas-borradas', icon: 'trash-bin' },
    { title: 'Sobre mí', url: '/acerca-de', icon: 'heart' },
  ];
  public labels = ['Música', 'Cine', 'Arte', 'Viajes'];
  constructor() {
    addIcons({ trashBinOutline, trashBinSharp, fileTrayFullOutline, fileTrayFullSharp, addCircleOutline, addCircleSharp, eyeOutline, eyeSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
}
