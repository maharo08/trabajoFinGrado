import { Component, OnInit } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, sendEmailVerification } from '@angular/fire/auth';
@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css'],

})
export class SendEmailComponent implements OnInit {

  constructor(private auth: Auth) { }

  ngOnInit(): void {
  }



}
