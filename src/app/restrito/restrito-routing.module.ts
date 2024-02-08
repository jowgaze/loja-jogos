import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestritoComponent } from './restrito.component';
import { ProdutoCadastrarComponent } from './produto-cadastrar/produto-cadastrar.component';
import { ProdutoListarComponent } from './produto-listar/produto-listar.component';
import { ProdutoAtualizarComponent } from './produto-atualizar/produto-atualizar.component';
import { GuardGuard } from '../guard.guard';

const restritoRoutes: Routes = [
    {
        path: 'restrito', component: RestritoComponent, children: [
            { path: 'cadastrar', component: ProdutoCadastrarComponent, canActivate: [GuardGuard] },
            { path: 'listar', component: ProdutoListarComponent, canActivate: [GuardGuard] },
            { path: 'atualizar/:id', component: ProdutoAtualizarComponent, canActivate: [GuardGuard] }
        ]
    },
    { path: '', redirectTo: 'restrito/listar', pathMatch: 'full' }
]
@NgModule({
    imports: [RouterModule.forChild(restritoRoutes)],
    exports: [RouterModule]
})
export class RestritoRoutingModule { }
