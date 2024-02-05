import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CustomSidenavComponent } from "./components/custom-sidenav/custom-sidenav.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule,
        RouterOutlet,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule, 
        CustomSidenavComponent,
        FormsModule,
        MatInputModule
      ]
})
export class AppComponent {
  title = 'RecipeRave';
  items = [
    'Elemento 1',
    'Elemento 2',
    'Elemento 3',
    'Elemento 4'  
  ]
  filteredItems = [...this.items];
  searchText : any;
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filteredItems = this.items.filter(item => item.toLowerCase().includes(filterValue.toLowerCase()));
  }
  /**Metodo para la animacion de recogida del sidenav */
  collapsed = signal(false);
  /**Delimita el ancho del sidenav */
  sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px');
}
