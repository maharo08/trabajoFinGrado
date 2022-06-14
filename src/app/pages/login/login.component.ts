import { Client } from './../../interfaces/cliente.model';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private clientService: ClientService
  ) {

    this.form = new FormGroup({

      email: new FormControl('', [
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        Validators.required
      ]),

      password: new FormControl('', [Validators.required]),

    });
  }


  ngOnInit(): void {
  }

  async onSubmit() {

    const response = await this.authService.login(this.form.value);
    await this.clientService.getClientList().subscribe(clients => {

      this.authService.addUser(clients.find(client => client.email === response.user.email) as Client);
      console.log(this.authService.user);

    })


  }

  onClick() {

    this.authService.loginWithGoogle()
    .then(response => {
      console.log(response),
      console.log('Estas logeado con Google'),
      this.router.navigate(['/landing']);})
    .catch(error => console.log(error));
  }

}
