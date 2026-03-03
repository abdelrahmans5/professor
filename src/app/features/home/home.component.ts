import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  @ViewChild('coursesTrack') private coursesTrack?: ElementRef<HTMLElement>;

  protected readonly teacher = {
    name: 'الأستاذ أحمد محمد',
    title: 'مدرس لغة إنجليزية ومتخصص في التحضير للامتحانات',
    intro:
      'أهلاً! اسمي أحمد، لدي أكثر من 10 سنوات خبرة في تدريب الطلاب وتحسين مهارات اللغة الإنجليزية. أهدف إلى بناء ثقة الطالب وتحقيق نتائج ملموسة.'
  };

  protected readonly about = {
    title: 'من نحن',
    text: 'أكاديمية متخصصة في تقديم دورات تفاعلية ومباشرة للطلاب من جميع المستويات. هدفنا تبسيط التعلم وتقديم محتوى عملي يساعد الطلاب على التقدم بسرعة.'
  };

  protected readonly aboutCards = [
    {
      title: 'شرح مبسّط',
      text: 'بنقدّم المفاهيم المعقّدة بطريقة سهلة وأمثلة قريبة من الطالب.'
    },
    {
      title: 'منتدى الطلاب',
      text: 'مساحة للأسئلة والنقاش مع دعم مستمر من المدرّس وفريقه.'
    },
    {
      title: 'متابعة ودعم',
      text: 'متابعة أسبوعية للواجبات والاختبارات مع Feedback سريع.'
    },
    {
      title: 'نتائج قوية',
      text: 'خطة تدريب عملية تساعد الطالب يحقق أعلى نتيجة بثبات.'
    }
  ];

  protected readonly stats = [
    { label: 'طالب مسجل', value: 420, hint: 'من مختلف الصفوف' },
    { label: 'محاضرة مسجلة', value: 85, hint: 'شرح وتدريب عملي' },
    { label: 'ساعة تعليم', value: 640, hint: 'محتوى تفاعلي مباشر' },
    { label: 'دورة متاحة', value: 12, hint: 'خطط تناسب كل مستوى' }
  ];

  // displayed stats are animated from 0 -> target
  protected displayedStats: { label: string; value: number; hint: string }[] = [];

  protected readonly whyUs = [
    'مدرس ذو خبرة طويلة ومُثبتة النتائج',
    'مناهج عملية ومباشرة مع أمثلة تطبيقية',
    'مجموعات صغيرة للمتابعة الشخصية',
    'دعم ومتابعة بعد انتهاء الدورة'
  ];

  protected readonly courses = [
    {
      id: 1,
      title: 'باقة الترم - الصف الأول الثانوي',
      description: 'الفصل الدراسي الثاني + مراجعة نهائية بأسلوب مبسّط.',
      duration: '8 أسابيع',
      lectures: 24,
      price: 100,
      oldPrice: 420,
      grade: 'الصف الأول الثانوي',
      startDate: 'الثلاثاء، ٢٨ يناير ٢٠٢٦'
    },
    {
      id: 2,
      title: 'اشتراك الشهر السابع - الصف الثالث',
      description: 'تدريب مكثف + امتحانات أسبوعية ومتابعة فردية.',
      duration: '6 أسابيع',
      lectures: 18,
      price: 160,
      oldPrice: null,
      grade: 'الصف الثالث الثانوي',
      startDate: 'الأربعاء، ٢٨ يناير ٢٠٢٦'
    },
    {
      id: 3,
      title: 'ورشة المراجعة النهائية',
      description: 'مراجعة شاملة قبل الامتحان مع حل نماذج حقيقية.',
      duration: '4 أسابيع',
      lectures: 12,
      price: 80,
      oldPrice: 150,
      grade: 'جميع الصفوف',
      startDate: 'الاثنين، ١٥ فبراير ٢٠٢٦'
    }
  ];

  protected readonly teacherImages = {
    hero: '/images/welcome.png',
    about: '/images/think.png',
    join: '/images/well.png'
  };

  protected readonly courseImages = [
    '/images/nice.png',
    '/images/welcome.png',
    '/images/think.png',
    '/images/well.png'
  ];

  ngOnInit(): void {
    // initialize displayedStats with zeros
    this.displayedStats = this.stats.map(s => ({ label: s.label, value: 0, hint: s.hint }));
    this.animateStats();
  }

  private animateStats() {
    this.stats.forEach((s, idx) => {
      const duration = 900; // ms
      const frameRate = 30; // ms per tick
      const steps = Math.ceil(duration / frameRate);
      const increment = Math.max(1, Math.ceil(s.value / steps));
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= s.value) {
          current = s.value;
          clearInterval(timer);
        }
        this.displayedStats[idx].value = current;
      }, frameRate);
    });
  }

  protected moveCoursesSlider(direction: 'next' | 'prev') {
    const track = this.coursesTrack?.nativeElement;
    if (!track) return;

    const card = track.querySelector<HTMLElement>('.lecture-card');
    const gap = 16;
    const step = (card?.offsetWidth ?? 320) + gap;
    const delta = direction === 'next' ? step : -step;

    track.scrollBy({ left: delta, behavior: 'smooth' });
  }
}
