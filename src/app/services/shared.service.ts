import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private paciente: string ="";
  private empleado: string ="";

  constructor() { }
  setPaciente( paciente:string){
    this.paciente = paciente;
  }
  setEmpleado( empleado:string ){
    this.empleado = empleado;
  }
  getPacienteData(){
    return {
      paciente: this.paciente,
      nombre: 'Nombre de paciente',
      fechaNacimiento: 'dd/mmm/aaaa',
      sexo:'Hombre/Mujer'
    }
  }
  getEmpleadoData(){
    return {
      empleado: this.paciente,
      nombre: 'Nombre de paciente',
      numColegiado: '111122233',
      servicio: 'Cardiologia'
    }
  }
}
