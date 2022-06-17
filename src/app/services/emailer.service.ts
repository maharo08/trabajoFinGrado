import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../interfaces/contact.model';

@Injectable({
  providedIn: 'root'
})


export class EmailerService {

  URI:string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  sendContactEmail(contact:Contact): Observable<any> {
    return this.httpClient.post(`${this.URI}/send-email`, contact);
  }
}
