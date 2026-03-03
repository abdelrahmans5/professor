import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  protected readonly achievements = [
    'أكثر من 10 سنوات خبرة في تدريس اللغة الإنجليزية.',
    'تخريج مئات الطلاب بنتائج مميزة في الامتحانات.',
    'بناء خطط متابعة فردية تراعي مستوى كل طالب.'
  ];

  protected readonly values = [
    {
      title: 'تبسيط المعلومة',
      description: 'تحويل الدروس المعقدة لشرح واضح وسهل التطبيق.'
    },
    {
      title: 'المتابعة المستمرة',
      description: 'متابعة أسبوعية للطالب من خلال الواجبات والاختبارات.'
    },
    {
      title: 'نتائج واقعية',
      description: 'التركيز على تحسين المستوى الحقيقي وليس الحفظ المؤقت.'
    }
  ];

}
