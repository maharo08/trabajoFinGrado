import { Injectable } from '@angular/core';
import { Client } from '../interfaces/cliente.model';
import { Firestore,collection,addDoc,collectionData,doc,deleteDoc, CollectionReference, DocumentData, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})


export class ClientService {

  // Hacemos referencia a una coleccion de documentos en la base de datos.
  private cliRef:CollectionReference<DocumentData>;

  constructor(private firestore:Firestore) {
    this.cliRef = collection(this.firestore,'client');
  }


  // Este código está agregando un cliente a la colección de clientes en Firestore.
  addClient(client: Client){
    return addDoc(this.cliRef,client);
  }


  //Pintamos una lista con los usuarios registrados
  getClientList():Observable<Client[]> {
    return collectionData(this.cliRef,{idField:'id'}) as Observable<Client[]>;
  }


  // Este código en particular está borrando un cliente utilizando la función deleteDoc.
  // La función deleteClient toma como argumento el ID y luego usa el método de borrado de documentos de Firestore.
  deleteClient(client: Client){
    const clientDocRef = doc(this.firestore, `client/${client.id}`);
    return deleteDoc(clientDocRef);
  }


  getClient(email: string){
    const emailDocRef = doc(this.firestore, `client/${email}`);
    return getDoc(emailDocRef);
  }


}

