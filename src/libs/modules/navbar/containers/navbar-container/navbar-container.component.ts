import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireAuth} from '@angular/fire/auth';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SetUserService} from '../../services/set-user.service';
import {catchError, filter, switchMap, take} from 'rxjs/operators';
import {from} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-navbar-container',
  templateUrl: './navbar-container.component.html',
  styleUrls: ['./navbar-container.component.scss']
})
export class NavbarContainerComponent implements OnInit {
  userInfo: any;
  error = false;
  signInForm = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required])
  });

  signUpForm = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.required, Validators.email]),
    lastName: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required])
  });
  constructor(private modalService: NgbModal,
              public auth: AngularFireAuth,
              private fb: FormBuilder,
              private snackbar: MatSnackBar,
              private saveUser: SetUserService,
              private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.userInfo = {userId: '', lastName: '', email: '', name: ''};
  }
  open(content) {
    this.modalService.open(content, {size: 'lg'});
  }
  signIn() {
    this.auth.signInWithEmailAndPassword(this.signInForm.value.email, this.signInForm.value.password)
      .then(() => {
        this.error = false;
        this.snackbar.open('Giriş Başarılı...', null, {duration: 2000});
        this.getProfile().subscribe(data => {
          this.userInfo = data;
          localStorage.setItem('user', JSON.stringify(this.userInfo));
        });
        this.modalService.dismissAll();
        this.signInForm.reset();
      })
      .catch(() => {
        this.error = true;
        this.snackbar.open('Bazı hatalar Oluştu...', null, {duration: 2000});
        this.auth.authState.subscribe(console.log);
        this.auth.user.subscribe(data => console.log('user data ' + data));
      });
  }
  logOut() {
    this.auth.signOut().then(() => {
      localStorage.setItem('user', null);
      this.snackbar.open('Çıkış Başarılı', null, {duration: 200});
    });
  }

  signUp() {
    this.auth.createUserWithEmailAndPassword(this.signUpForm.value.email, this.signUpForm.value.password)
      .then(() => {
        this.auth.user.pipe(
          take(1),
          switchMap((user) => {
            return from(this.firestore
              .doc(`userProfile/${user.uid}`)
              .set({...{email: this.signUpForm.value.email,
                  name: this.signUpForm.value.name, lastName: this.signUpForm.value.lastName,
                  userId: this.signUpForm.value.uid}, userId: user.uid}));
          }),
          catchError((error) => {
            this.snackbar.open('Eroor', null, { duration: 2000});
            return error;
          })
        ).subscribe(() => {
          this.modalService.dismissAll();
          this.signUpForm.reset();
          this.snackbar.open('Kayıt Başarılı..', null, {duration: 200});
        });

      })
      .catch(data => console.log(data));
  }
  getProfile() {
    return this.auth.user.pipe(
      take(1),
      switchMap((user) => {
        return this.firestore.doc(`userProfile/${user.uid}`).valueChanges()
          .pipe(
            filter(value => !!value)
          );
      })
    );
  }

}
