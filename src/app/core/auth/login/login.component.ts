import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';

  onSubmit(event: Event) {
    event.preventDefault();
    this.message = 'تم إرسال بيانات الدخول (محاكاة)';
    console.log('Login', { email: this.email, password: this.password });
  }
}
