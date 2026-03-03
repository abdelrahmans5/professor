import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgetpass',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './forgetpass.component.html',
  styleUrl: './forgetpass.component.css',
})
export class ForgetpassComponent {
  email = '';
  message = '';

  onRequest(event: Event) {
    event.preventDefault();
    this.message = 'تم إرسال رابط إعادة الضبط إلى البريد (محاكاة)';
    console.log('Request reset for', this.email);
  }
}
