Suggerimenti laptop Copilot:  https://copilot.microsoft.com/shares/UBpBLAP4Yrd11Gb4zLdLV
Laptop con AMD Ryzen 5 o 7
https://amzn.eu/d/02NVL6ng

--------------------------------------------------------------------------------------------------------------------------------------

Lezione di mercoledì 11 febbraio 2026:

Oggi abbiamo fatto un progetto usando componenti di Angular material

https://material.angular.dev/
https://material.angular.dev/components/categories


https://ng-bootstrap.github.io/#/home


- Abbiamo installato Angular material usando il commando: ng add @angular/material
https://material.angular.dev/guide/getting-started
- Scrivere Y (yes) 
- Scegliere il tema

- Abbiamo preso un componente da Angular material, un toolbar
https://material.angular.dev/components/toolbar/overview

- Abbiamo creato un componente header dentro la cartella components, poi abbiamo rinominato il selector, su header-component.ts,
da "app-header-component" a solo "app-header"

- Su header-component.html, abbiamo incollato il codice del toolbar di Angular material (e abbiamo eliminato le classi e i label che non ci servivano)
- Abbiamo andato su header-component.ts e su imports di @components abbiamo inserito MatToolbarModule, MatIconModule e MatButtonModule perché funzioni

https://fonts.google.com/icons - Material Icons

- I mat-icon usano icone material. Se invece di menu si volesse usare un altro icona, basta cambiare il nome dell'icona all'interno delle tag <mat-icon> (ad esempio home)

- Per usare una icona da Material icons basta solo copiare il nome da "Icon name" (ad esempio "menu_open") e incollarla nel html 
<mat-icon>menu_open</mat-icon>


- https://material.angular.dev/guide/theming-your-components  - Theming your components
Per cambiare il colore del toolbar, basta inserire una classe (ad esempio "my-toolbar") e poi andare su header-component.scss e scrivere copiare il codice da "Theming your components" e incollarlo. 

- ng g c /components/HomeComponent e ng g c /components/ListComponent per creare i componenti Home e List
- Su home-component.ts e list-component.ts, abbiamo inserito (rinominato) "selector: 'app-home'" e "selector: 'app-list'" rispettivamente

- Su app-routes.ts, abbiamo inserito le rotte per Home e List

- https://material.angular.dev/components/card/overview - Card component
- https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=20 - API per prendere le carte di Yu-Gi-Oh! (20 carte per volta, con offset di 20)

- ng g s /services/yugi-service/YugiService per creare un servizio che prende le carte di Yu-Gi-Oh! dall'API
- Su yugi-service.ts, ho incollato l'url dell'API dentro la classe YugiService. 
- Poi ho creato un metodo getCards() e ho fatto una fetch all'API cioè una richiesta per prendere i dati.

- Su list-component.ts, ho iniettato il servizio YugiService e ho creato un costruttore per chiamare il metodo getCards() e stampare i risultati nella console. 

- https://transform.tools/json-to-typescript - Per convertire i dati JSON dell'API in un'interfaccia TypeScript, basta copiare il JSON e incollarlo su questo sito.

- Ho convertito i dati JSON dell'API in un'interfaccia TypeScript e l'ho incollato su card.ts (che ho creato manualmente dentro la cartella model).
  Ho rinominato l'interfaccia da Root a Card.
- Su yugi-service.ts, ho creato la variabile cards di tipo Card[] e ho modificato il metodo getCards() per assegnare i risultati dell'API a questa variabile.
  Poi ho creato un construttore per chiamare il metodo getCards() quando il servizio viene istanziato.

- Su list-component.ts, ho commentato la chiamata al metodo getCards(). Non ne abbiamo bisogno più.

- Su list-component.html, ho creato una card per ogni carta di Yu-Gi-Oh! usando *ngFor per iterare sulla variabile cards del servizio. 
  Ho usato i dati delle carte (ad esempio name, type, desc) per popolare le card. Poi ho incollaro il codice del card component di Angular material per stilizzare le card.
  https://material.angular.dev/components/card/overview

- Su list-component.ts, ho aggiunto a imports di @components MatCardModule per far funzionare le card di Angular material.

- Di nuovo su list-component.html, ho aggiunto un'immagine per ogni carta usando il tag <img> e ho usato l'url dell'immagine fornito dall'API (card.card_images[0].image_url) per mostrare l'immagine della carta.
  Poi ho stilizzato l'immagine usando CSS per farla adattare alla card.


  COMPITO:  FARE UNA PICCOLA APP CON QUESTI PEZZI DI MATERIAL USANDO L'API GUTTENBERG + SEARCH PER CERCARE LIBRI