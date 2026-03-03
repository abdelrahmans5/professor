import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  protected readonly projectName = 'أكاديمية الأستاذ';
  protected readonly teacherName = 'الأستاذ أحمد';
  protected readonly phoneNumber = '0100 000 0000';

  protected readonly navItems = [
    { label: 'الرئيسية', link: '/home' },
    { label: 'الدورات', link: '/courses' },
    { label: 'مواعيد الحصص', link: '/schedule' },
    { label: 'عن المدرس', link: '/about' },
  ];
}
