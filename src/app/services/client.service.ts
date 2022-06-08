import { Injectable } from '@angular/core';
import { Client } from '../interfaces/cliente.model';
import { Firestore,collection,addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  // El código declara una variable llamada clientList, que es un array de objetos Client.
  public clientList: Client[] = [];


  constructor(private firestore:Firestore) { }


  // Este código está agregando un cliente a la colección de clientes en Firestore.
  addClient(client: Client){

    const cliRef=collection(this.firestore,'client');
    return addDoc(cliRef,client);

  }

}
