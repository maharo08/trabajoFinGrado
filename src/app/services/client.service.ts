import { Injectable } from '@angular/core';
import { Client } from '../interfaces/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  public clientList: Client[] = [];

  constructor() { }

  public save(client:Client): void {

    this.clientList.push(client);

  }



}
