import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Simple authentication logic (replace with your actual authentication logic)
    if (this.username === 'dummy@123' && this.password === 'dummy@123') {
      // Authentication successful, navigate to the dashboard
      this.router.navigate(['/dashboard']);
    } else {
      // Authentication failed, display an error message or handle accordingly
      console.log('Invalid credentials');
    }
  }
}
