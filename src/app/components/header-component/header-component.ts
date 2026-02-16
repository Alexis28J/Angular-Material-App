import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {

  paletteId = 0;
  isDarkMode = false;


  switchMode(){
  //    if (this.isDarkMode) {   // è uguale a dire this.isDarkMode === true
  //     this.isDarkMode = false;
  //    } else {
  //   this.isDarkMode = true; 
  // }
  this.isDarkMode = !this.isDarkMode;  
  document.body.classList.toggle('dark-body');  
  //In TypeScript, il termine "toggle" si riferisce generalmente alla logica o alla gestione di un valore booleano (true/false) 
  //che viene invertito, oppure all'azione di mostrare/nascondere elementi (interfacce) o attivare/disattivare funzionalità.
  }

 switchPalette() {
  this.paletteId++;
  if (this.paletteId > 2) {
    this.paletteId = 0;
  }
  if (this.paletteId === 1) {
    document.body.classList.add('charteuse-theme');
  } else if (this.paletteId === 2){
    document.body.classList.remove('charteuse-theme');
    document.body.classList.add('orange-theme');
  } else {
    document.body.classList.remove('charteuse-theme');
    document.body.classList.remove('orange-theme');
  }
 }
}
