import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/interfaces/cliente.model';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public clientList: Client[] = [];

  constructor(
    private readonly clientService : ClientService,
    private readonly authService : AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onclick() {
    this.authService.logout()
    .then(() => {this.router.navigate(['/register']);})
    .catch(error => console.log(error));
  }

}
