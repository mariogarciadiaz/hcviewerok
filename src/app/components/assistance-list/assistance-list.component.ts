import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-assistance-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule],
  templateUrl: './assistance-list.component.html',
  styleUrl: './assistance-list.component.css'
})
export class AssistanceListComponent {
  listaAsistencias = [
    { id: 1, nombre: 'Asistencia 1' },
    { id: 2, nombre: 'Asistencia 2' },
    { id: 3, nombre: 'Asistencia 3' }
  ];
  constructor(
      private sharedService: SharedService,
      private router: Router) {

      }
  navigateToDetail(idAsistencia: number)   {
    this.router.navigate(
     [ '/detail', idAsistencia ]
    )
  }

}
