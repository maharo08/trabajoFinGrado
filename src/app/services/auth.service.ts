import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { Subject } from 'rxjs';
import { Client } from '../interfaces/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$ = new Subject<Client>();
  public user!: Client;

  constructor(private auth: Auth) {}


  register ({email, password}:any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }


  login ({email, password}:any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider);
  }

  addUser(user:Client) {
    this.user$.next(user);
    this.user = user;
  }

  logout() {
    return signOut(this.auth);
  }



}
