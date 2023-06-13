import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit{

  declare destino : string;
  declare tipo : string;
  declare dataC : string;
  declare dataS: string;
  declare orcamento : string;
  declare qtd : string;

  constructor(private _router : ActivatedRoute){};
  
 
  ngOnInit(): void {
    this._router.params.subscribe(params => {
      this.destino = params['destino'];
    });
    this._router.params.subscribe(params => {
      this.tipo = params['tipo'];
    });
    this._router.params.subscribe(params => {
      this.dataC = params['dataC'];
    });
    this._router.params.subscribe(params => {
      this.dataS = params['dataS'];
    });
    this._router.params.subscribe(params => {
      this.orcamento = params['orcamento'];
    });
    this._router.params.subscribe(params => {
      this.qtd = params['qtd'];
    });
  }

}
