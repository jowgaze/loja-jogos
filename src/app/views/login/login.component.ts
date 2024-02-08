import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  hide: boolean = true;

  usuario!: string;
  senha!: string;
  constructor(private _loginService: LoginService, private _router:Router) { }
  ngOnInit(): void {
  }
  fazerLogin() {
    this._loginService.login(this.usuario, this.senha);
    this._router.navigate(['/restrito/listar']);
    this._loginService.setMostraMenu(false)
  }
}
