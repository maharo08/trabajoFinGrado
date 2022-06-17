import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact.model';

@Injectable({
  providedIn: 'root'
})


export class EmailerService {

  URI:string = 'http://localhost:3000';

  constructor() { }

  sendContactEmail(contact:Contact) {

    
  }
}
