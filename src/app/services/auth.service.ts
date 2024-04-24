import { Injectable } from '@angular/core';
import { LoginRequest } from '../interfaces/login-request';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';
import { LoginResponse } from '../interfaces/login-response';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient, private router: Router) { }
  
  apiUrl = environment.apiUrl;
  tokenKey: string = 'token';

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}Users/Login`, data).pipe(
      map((response) => {
        if (response.isSuccessful) {
          localStorage.setItem(this.tokenKey, response.token);
        } else {
          this.router.navigate(['/register']); // Navigate to register if login is unsuccessful
        }
        return response; 
      })
    );
  }
}