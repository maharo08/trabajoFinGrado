import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/interfaces/cliente.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public clientList: Client[] = [];

  constructor(private readonly clientService : ClientService) { }

  ngOnInit(): void {

    this.clientList = this.clientService.clientList;
  }

}
