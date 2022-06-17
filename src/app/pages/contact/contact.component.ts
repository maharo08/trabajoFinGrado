import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/interfaces/contact.model';
import { EmailerService } from 'src/app/services/emailer.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],


})
export class ContactComponent implements OnInit {

  constructor(private emailerService: EmailerService) { }


  formContact = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  ngOnInit(): void {}


  send() {
    const valores = this.formContact.value;
    this.emailerService.sendContactEmail(valores)
        .subscribe(res => {
          if(res.status === 200){ alert("Tu email ha sido enviado!!"); }
        });
  }

}
