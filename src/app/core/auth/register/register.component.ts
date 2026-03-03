import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  message = '';

  onSubmit(event: Event) {
    event.preventDefault();
    this.message = 'تم إنشاء حساب (محاكاة)';
    console.log('Register', { name: this.name, email: this.email });
  }
}
