import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../../../models/Produto.model';
import { ProdutoService } from '../../produto.service';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrl: './produto-listar.component.css'
})
export class ProdutoListarComponent {
  public produtos: Produto[] = [];
  constructor(private _produtoService: ProdutoService, private router: Router, private _loginService: LoginService) { }

  ngOnInit(): void {
    this.listarProdutos();
    this._loginService.setMostraMenu(false);
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
  excluir(id: number) {
    this._produtoService.removerProduto(id).subscribe(
      produto => {
        this.listarProdutos();
      },
      err => { console.log("erro ao Excluir") }
    );
    // window.location.href = "/restrito/lista";
    this.router.navigate(["/restrito/lista"]);
  }

}
