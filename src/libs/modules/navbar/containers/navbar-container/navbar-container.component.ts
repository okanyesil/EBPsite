import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireAuth} from '@angular/fire/auth';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar-container',
  templateUrl: './navbar-container.component.html',
  styleUrls: ['./navbar-container.component.scss']
})
export class NavbarContainerComponent implements OnInit {
  signInForm = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required])
  });

  signUpForm = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required])
  });
  constructor(private modalService: NgbModal,
              private auth: AngularFireAuth,
              private fb: FormBuilder,
              private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
  open(content) {
    this.modalService.open(content, {size: 'lg'});
  }
  signIn() {
    this.auth.signInWithEmailAndPassword(this.signInForm.value.email, this.signInForm.value.password)
      .then(() => {
        this.snackbar.open('Giriş Başarılı...', null, {duration: 2000});
        this.modalService.dismissAll();
      })
      .catch(() => {
        this.snackbar.open('Bazı hatalar Oluştu...', null, {duration: 2000});
      });
  }

  signUp() {
    this.auth.createUserWithEmailAndPassword(this.signUpForm.value.email, this.signUpForm.value.password)
      .then(data => console.log(data))
      .catch(data => console.log(data));
  }

}
