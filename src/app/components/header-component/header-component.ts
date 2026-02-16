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

  isDarkMode = false;

  switchMode(){
  //    if (this.isDarkMode) {   // è uguale a dire this.isDarkMode === true
  //     this.isDarkMode = false;
  //    } else {
  //   this.isDarkMode = true; 
  // }
  this.isDarkMode = !this.isDarkMode;  
  document.body.classList.toggle('dark-body'); 
  }

}
