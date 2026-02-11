import { Component, inject } from '@angular/core';
import { YugiService } from '../../services/yugi-service/yugi-service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-list',
  imports: [MatCardModule],
  templateUrl: './list-component.html',
  styleUrl: './list-component.scss',
})
export class ListComponent {

  yugiServ = inject(YugiService);


  // constructor(){
  //   this.yugiServ.getCards();
  // }


}
