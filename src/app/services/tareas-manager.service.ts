// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { Tarea } from 'src/app/interfaces/tarea';
// @Injectable({
//   providedIn: 'root'
// })
// export class TareasManagerService {

//   private tareas: Tarea[] = [];

//   private tareasSubject = new BehaviorSubject<Tarea[]>(this.tareas);

//   constructor() {}

//   getTareas() {
//     return this.tareasSubject.asObservable();
//   }

//   agregarTarea(tarea: Tarea) {
//     this.tareas.push({ ...tarea, id: this.tareas.length + 1 });
//     this.tareasSubject.next(this.tareas);
//   }

//   actualizarTarea(tarea: Tarea) {
//     const index = this.tareas.findIndex(t => t.id === tarea.id);
//     if (index !== -1) {
//       this.tareas[index] = tarea;
//       this.tareasSubject.next(this.tareas);
//     }
//   }

//   eliminarTarea(id: number) {
//     this.tareas = this.tareas.filter(t => t.id !== id);
//     this.tareasSubject.next(this.tareas);
//   }
// }

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tarea } from 'src/app/interfaces/tarea';
@Injectable({
  providedIn: 'root'
})
export class TareasManagerService {

  // Locate Storage
  private tareas: Tarea[] = JSON.parse(localStorage.getItem('tareas') || '[]');
  private tareasSubject = new BehaviorSubject<Tarea[]>(this.tareas);

  constructor() {}

  //Métodos para tareas locales
  getTareas() {
    return this.tareasSubject.asObservable();
  }

  private guardarEnLocalStorage() {
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  agregarTarea(tarea: Tarea) {
    this.tareas.push({ ...tarea, id: this.tareas.length + 1 });
    this.tareasSubject.next(this.tareas);
    this.guardarEnLocalStorage();
  }

  actualizarTarea(tarea: Tarea) {
    const index = this.tareas.findIndex(t => t.id === tarea.id);
    if (index !== -1) {
      this.tareas[index] = tarea;
      this.tareasSubject.next(this.tareas);
      this.guardarEnLocalStorage();
    }
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter(t => t.id !== id);
    this.tareasSubject.next(this.tareas);
    this.guardarEnLocalStorage();
  }
}
