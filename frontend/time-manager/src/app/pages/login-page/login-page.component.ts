import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  imports: [
    FormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPage {
  username = '';
  password = '';
  error = '';
  loading = false;

  private readonly http: HttpClient = inject(HttpClient);
  private readonly router: Router = inject(Router);

  onSubmit() {
    this.http.post('https://dummyjson.com/auth/login', {
      username: this.username,
      password: this.password,
      expiresInMins: 30
    }).subscribe({
      next: (response: any) => {
        console.log('Login success:', response);

        // Sauvegarder le token
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response));

        this.loading = false;

        // Rediriger vers la page protégée
        this.router.navigate(['']);
      },
      error: (err) => {
        console.error('Login error:', err);
        this.error = 'Identifiants incorrects';
        this.loading = false;
      }
    });
  }
}
