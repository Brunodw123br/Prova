import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private _router : Router) {}

  Viagens = [
    {"destino":"Acapulco", "tipo":"Lazer", "dataC":"20/06/2023", "dataS":"28/06/2023", "orcamento":"R$4000", "qtd": 4},
    {"destino":"Egito", "tipo":"Lazer", "dataC":"08/08/2023", "dataS":"15/08/2023", "orcamento":"R$3000", "qtd": 4},
    {"destino":"Nova Zelandia", "tipo":"Lazer", "dataC":"01/01/2023", "dataS":"21/02/2023", "orcamento":"R$2000", "qtd": 4},
    {"destino":"Uruguai", "tipo":"Trabalho", "dataC":"07/03/2015", "dataS":"21/03/2025", "orcamento":"R$1000", "qtd": 1},
  ];
  clicadoDetalhe(viagem : any){
    this._router.navigate(['Detalhes', viagem.destino, viagem.tipo, viagem.dataC, viagem.dataS, viagem.orcamento, viagem.qtd]);
  };
  clicadoExcluir(viagem : any){
    this._router.navigate(['Excluir', viagem.destino, viagem.tipo, viagem.dataC, viagem.dataS, viagem.orcamento, viagem.qtd]);
  };
  ngOnInit(): void {
    
  };
}
