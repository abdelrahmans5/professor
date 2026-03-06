import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './core/layouts/blank-layout/blank-layout.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { ForgetpassComponent } from './core/auth/login/forgetpass/forgetpass.component';
import { VerifycodeComponent } from './core/auth/login/verifycode/verifycode.component';
import { CoursesComponent } from './features/courses/courses.component';
import { ScheduleComponent } from './features/schedule/schedule.component';
import { AboutComponent } from './features/about/about.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: '', component: AuthLayoutComponent, children: [
            { path: 'login', component: LoginComponent, title: 'Login' },
            { path: 'register', component: RegisterComponent, title: 'Register' },
            { path: 'forgot-password', component: ForgetpassComponent, title: 'Forgot Password' },
            { path: 'verify-code', component: VerifycodeComponent, title: 'Verify Code' },
        ]
    },
    {
        path: '', component: BlankLayoutComponent, children: [
            { path: 'home', component: HomeComponent, title: 'الرئيسية' },
            { path: 'courses', component: CoursesComponent, title: 'الدورات' },
            { path: 'schedule', component: ScheduleComponent, title: 'مواعيد الحصص' },
            { path: 'about', component: AboutComponent, title: 'عن المدرس' },
        ]
    },
    {
        path: '**', component: NotFoundComponent, title: '404 - Not Found'
    }
];
