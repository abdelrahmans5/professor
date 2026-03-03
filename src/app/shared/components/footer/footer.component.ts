import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();

  protected readonly quickLinks = [
    { label: 'الرئيسية', link: '/home' },
    { label: 'الدورات', link: '/courses' },
    { label: 'المواعيد', link: '/schedule' },
    { label: 'المدونة التعليمية', link: '/blog' },
  ];

  protected readonly projectLinks = [
    { label: 'عن المدرس', link: '/about' },
    { label: 'الأسئلة الشائعة', link: '/faq' },
    { label: 'سياسة الخصوصية', link: '/privacy' },
    { label: 'الشروط والأحكام', link: '/terms' },
  ];

  protected readonly socialLinks = [
    { label: 'Facebook', href: 'https://facebook.com', icon: 'fa-brands fa-facebook-f' },
    { label: 'Instagram', href: 'https://instagram.com', icon: 'fa-brands fa-instagram' },
    { label: 'YouTube', href: 'https://youtube.com', icon: 'fa-brands fa-youtube' },
    { label: 'Telegram', href: 'https://t.me', icon: 'fa-brands fa-telegram' },
  ];

}
