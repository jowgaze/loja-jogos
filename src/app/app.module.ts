import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { RestritoRoutingModule } from './restrito/restrito-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './views/header/header.component';
import { BannerHomeComponent } from './views/banner-home/banner-home.component';
import { LoginComponent } from './views/login/login.component';
import { FooterComponent } from './views/footer/footer.component';
import { RestritoComponent } from './restrito/restrito.component';
import { ProdutoCadastrarComponent } from './restrito/produto-cadastrar/produto-cadastrar.component';
import { ProdutoAtualizarComponent } from './restrito/produto-atualizar/produto-atualizar.component';
import { ProdutoListarComponent } from './restrito/produto-listar/produto-listar.component';
import { MenuRestritoComponent } from './restrito/menu-restrito/menu-restrito.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerHomeComponent,
    LoginComponent,
    FooterComponent,
    RestritoComponent,
    ProdutoCadastrarComponent,
    ProdutoAtualizarComponent,
    ProdutoListarComponent,
    MenuRestritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    RestritoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
