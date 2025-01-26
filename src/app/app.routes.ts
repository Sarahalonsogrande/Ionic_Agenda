import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'todas-tareas',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'portada',
    loadComponent: () => import('./pages/portada/portada.page').then( m => m.PortadaPage)
  },
  {
    path: 'nueva-tarea',
    loadComponent: () => import('./pages/nueva-tarea/nueva-tarea.page').then( m => m.NuevaTareaPage)
  },
  {
    path: 'todas-tareas',
    loadComponent: () => import('./pages/todas-tareas/todas-tareas.page').then( m => m.TodasTareasPage)
  },
  {
    path: 'buscar-tareas',
    loadComponent: () => import('./pages/buscar-tareas/buscar-tareas.page').then( m => m.BuscarTareasPage)
  },
  {
    path: 'acerca-de',
    loadComponent: () => import('./pages/acerca-de/acerca-de.page').then( m => m.AcercaDePage)
  },
];
