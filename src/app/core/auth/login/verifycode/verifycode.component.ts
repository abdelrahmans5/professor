import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-verifycode',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './verifycode.component.html',
  styleUrl: './verifycode.component.css',
})
export class VerifycodeComponent {
  code = '';
  message = '';

  onVerify(event: Event) {
    event.preventDefault();
    this.message = 'تم التحقق من الكود (محاكاة)';
    console.log('Verify code', this.code);
  }
}
