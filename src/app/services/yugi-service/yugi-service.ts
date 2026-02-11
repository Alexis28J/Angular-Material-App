import { Injectable, signal } from '@angular/core';
import { Card } from '../../model/card';

@Injectable({
  providedIn: 'root',
})
export class YugiService {
  
  url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=20";

  cards = signal<Card[]>([]);

  constructor(){
    this.getCards();
  }

  getCards(){
    fetch(this.url)
    .then(resp => resp.json())
    //.then(result => console.log(result));
    //La fetch è una funzione che permette di fare richieste HTTP. In questo caso, stiamo facendo una richiesta GET all'URL specificato per ottenere informazioni sulle carte di Yu-Gi-Oh!. 
    //La risposta viene convertita in formato JSON e poi stampata nella console.
    .then(result => this.cards.set(result.data))
  }
}
