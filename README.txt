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