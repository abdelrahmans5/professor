import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  imports: [RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  protected readonly tracks = [
    {
      title: 'تأسيس القواعد والمفردات',
      level: 'للمرحلة الإعدادية والثانوي',
      lessons: '16 محاضرة',
      duration: '8 أسابيع',
      description: 'برنامج تأسيسي لبناء القاعدة اللغوية من الصفر مع تطبيقات عملية واختبارات قصيرة.',
      image: '/images/welcome.png'
    },
    {
      title: 'التحضير للامتحانات النهائية',
      level: 'صفوف النقل والثانوية العامة',
      lessons: '20 محاضرة',
      duration: '10 أسابيع',
      description: 'شرح نمط الامتحان وحل تدريبات متنوعة مع متابعة أسبوعية وتقارير أداء.',
      image: '/images/think.png'
    },
    {
      title: 'محادثة ونطق بثقة',
      level: 'لكل المستويات',
      lessons: '12 محاضرة',
      duration: '6 أسابيع',
      description: 'تدريب عملي على التحدث والاستماع والنطق الصحيح في مواقف حياتية حقيقية.',
      image: '/images/nice.png'
    }
  ];

  protected readonly steps = [
    'اختار البرنامج المناسب لمستواك',
    'احجز مكانك وسجّل بياناتك',
    'ابدأ المحاضرات واحصل على متابعة أسبوعية'
  ];
}
