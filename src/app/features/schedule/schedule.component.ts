import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-schedule',
  imports: [RouterLink],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css',
})
export class ScheduleComponent {
  protected readonly weekPlan = [
    {
      day: 'السبت',
      sessions: [
        'الصف الأول الثانوي - 6:00 مساءً',
        'الصف الثاني الثانوي - 8:00 مساءً'
      ]
    },
    {
      day: 'الاثنين',
      sessions: [
        'مراجعة قواعد - 5:00 مساءً',
        'تدريب امتحانات - 7:30 مساءً'
      ]
    },
    {
      day: 'الأربعاء',
      sessions: [
        'محادثة ونطق - 6:30 مساءً',
        'حل واجبات مباشر - 8:30 مساءً'
      ]
    }
  ];

  protected readonly notes = [
    'الحجز بيتم قبل المحاضرة بـ 24 ساعة على الأقل.',
    'المحاضرات المباشرة متاحة بإعادة مشاهدة لمدة 7 أيام.',
    'يتم تحديث الجدول أسبوعيًا حسب مواعيد الاختبارات.'
  ];
}
