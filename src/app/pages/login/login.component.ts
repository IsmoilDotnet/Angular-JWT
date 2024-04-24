import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  form!: FormGroup;
  decodeToken: any | null;
  tokenKey = 'token';
  roles: string[] = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  login() {
    this.authService.login(this.form.value).subscribe({
      next: (response) => {
        console.log(response);

        this.decodeToken = jwtDecode(localStorage.getItem(this.tokenKey)!)
        this.snackBar.open(response.message, 'Close', {
          duration: 5000,
          horizontalPosition: 'center'
        });
        
        for (let index = 0; index < this.decodeToken.roles.length; index++) {
          console.log(this.decodeToken.roles[index])
          if(this.decodeToken.roles[index] == 'Admin' || this.decodeToken.roles[index] == 'admin'){
            this.router.navigate(['/users'])
          } else if(this.decodeToken.roles[index] == 'Student') {
            this.router.navigate(['/student-profile'])
          }
        }
      },
      error: (err) => {
        console.log(err);
        this.snackBar.open(err.message, 'Close', {
          duration: 5000,
          horizontalPosition: 'center'
        });
      }
    });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
}