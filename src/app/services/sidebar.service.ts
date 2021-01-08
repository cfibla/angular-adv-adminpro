import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu = [];

  cargarMenu() {
    this.menu = JSON.parse(localStorage.getItem('menu')) || [];
  }

  // menu: any[] = [
  //   {
  //     titulo: 'Dashboard',
  //     icono: 'mdi mdi-gauge',
  //     submenu: [
  //       {titulo: 'Main', url: '/'},
  //       {titulo: 'Gráficas', url: 'grafica1'},
  //       {titulo: 'Progress Bar', url: 'progress'},
  //       {titulo: 'Promesas', url: 'promesas'},
  //       {titulo: 'RxJs', url: 'rxjs'}
  //     ]
  //   },
  //   {
  //     titulo: 'Mantenimiento',
  //     icono: 'mdi mdi-folder-lock-open',
  //     submenu: [
  //       {titulo: 'Usuarios', url: 'usuarios'},
  //       {titulo: 'Hospitales', url: 'hospitales'},
  //       {titulo: 'Médicos', url: 'medicos'},
  //     ]
  //   }
  // ];

  constructor() { }
}
