import { Client } from './../../interfaces/cliente.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  public user!: Client;
  constructor(private authService: AuthService) {

    this.authService.user$.subscribe(user => {this.user = user;});

  }

  ngOnInit(): void {}

}
