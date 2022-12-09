import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private app: FirebaseApp;

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDJUOvl4GxrRnWWzpcUuq7kNrRId5_xu6Y',
      authDomain: 'literate-tribble.firebaseapp.com',
      projectId: 'literate-tribble',
      storageBucket: 'literate-tribble.appspot.com',
      messagingSenderId: '270439538199',
      appId: '1:270439538199:web:72ad417f282eac0800c652',
      measurementId: 'G-RDLQM6FLFE',
    };

    this.app = initializeApp(firebaseConfig);
  }

  signup(email: string, password: string): void {
    const auth = getAuth(this.app);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User created
        this.storeUser(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  signin(email: string, password: string): void {
    const auth = getAuth(this.app);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        this.storeUser(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  private async storeUser(user: UserCredential): Promise<void> {
    let token = await user.user.getIdTokenResult();

    localStorage.setItem('expiration', token.expirationTime);
    localStorage.setItem('id_token', token.token);
  }

  getToken(): string | null {
    let token: string | null = localStorage.getItem('id_token');

    if (this.isAuthenticated()) return null;

    return token;
  }

  disconnect(): void {
    localStorage.removeItem('expiration');
    localStorage.removeItem('id_token');
  }

  isAuthenticated(): boolean {
    const expiration = dayjs(localStorage.getItem('expiration'));

    return dayjs().isBefore(expiration);
  }
}
