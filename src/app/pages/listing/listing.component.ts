import { Component, OnInit } from '@angular/core';
import { ClientService } from './../../services/client.service';
import { Client } from 'src/app/interfaces/cliente.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit {

  clients : Client[]=[];

  constructor( public clientService:ClientService ) {}


  // El siguiente código inicializa el componente y llama al método getClient del servicio ClientService.
  // getClient devuelve una lista de clientes, que se asigna a la variable local clients.
  ngOnInit(): void {
    this.clientService.getClientList().subscribe(clients=>{
      this.clients=clients;
    })
  }


  // El siguiente código elimina a un cliente en particular. Se llama al método deleteClient del fichero clientService.
  // async se utiliza generalmente para cargar datos de un servidor.
  async onClickDelete(client:Client){

    if (confirm('¿Seguro que quieres eliminar este cliente?')) {

      const response = await this.clientService.deleteClient(client);
      console.log(response);

    }

  }

}
