import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';
import { Tarea } from 'src/app/interfaces/tarea';

@Component({
  selector: 'app-tareas-compartidas',
  templateUrl: './tareas-compartidas.component.html',
  styleUrls: ['./tareas-compartidas.component.scss']
})
export class TareasCompartidasComponent implements OnInit {
  tareas: Tarea[] = [];

  constructor(private tareasService: TareasService) {}

  ngOnInit() {
    this.tareasService.getTareasCompartidas().subscribe(tareas => {
      this.tareas = tareas;
    });
  }

  agregarTarea(tarea: Tarea) {
    this.tareasService.agregarTareaCompartida(tarea);
  }

  eliminarTarea(id: string) {
    this.tareasService.eliminarTareaCompartida(id);
  }
}
