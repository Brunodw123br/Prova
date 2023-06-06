import { Component } from '@angular/core';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent {
  Viagens = [
    {"destino":"Destino", "tipo":"tipo", "dataC":"Data Chegada", "dataS":"Data Saida"},
    {"destino":"Acaplco", "tipo":"Lazer", "dataC":"20/06/2023", "dataS":"28/06/2023"},
    {"destino":"Egito", "tipo":"Lazer", "dataC":"08/08/2023", "dataS":"15/08/2023"},
    {"destino":"Nova Zelandia", "tipo":"Lazer", "dataC":"01/01/2023", "dataS":"21/02/2023"},
    {"destino":"Uruguai", "tipo":"Trabalho", "dataC":"07/03/2015", "dataS":"21/03/2025"},
  ];
}
