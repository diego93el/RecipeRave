import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

/**Metodo para crear los objetos del menu del sidebar */
export type MenuItem = { 
  /**Llamamos las variables que queramos y que tenga el metodo de angular material */
  icon: string;
  label: string;
  route: string;
}
@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})
export class CustomSidenavComponent {
  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }
  /**Declaramos el metodo dentro de la clase*/
  menuItems= signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard',
    },
    {
      icon: 'restaurant',
      label: 'Recetas', 
      route: 'recipes'
    },
    {
      icon: 'person',
      label: 'Cuenta',
      route: 'account'
    },
    {
      icon: 'comments',
      label: 'Comentarios',
      route: 'comments'
    },
    {
      icon: 'settings',
      label: 'Configuración',
      route: 'settings'
    }
  ]);

  profilePicSize = computed (() => this.sideNavCollapsed() ? '32' : '100');
}
