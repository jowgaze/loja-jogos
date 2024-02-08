import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../../models/Produto.model';
import { ProdutoService } from '../../produto.service';

@Component({
  selector: 'app-banner-home',
  templateUrl: './banner-home.component.html',
  styleUrl: './banner-home.component.css'
})
export class BannerHomeComponent implements OnInit {
  public produtos: Produto[] = [];
  constructor(private _produtoService: ProdutoService) { }
  ngOnInit(): void {
    this.listarProdutos();
  }
  listarProdutos(): void {
    this._produtoService.getProdutos()
      .subscribe(
        retornaProduto => {
          this.produtos = retornaProduto.map(
            item => {
              return new Produto(
                item.id,
                item.produto,
                item.descricao,
                item.foto,
                item.preco
              );
            }
          )
        }
      )
  }

}
