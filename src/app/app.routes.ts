import { Routes } from '@angular/router';
import { DoctorListComponent } from './components/doctors/doctor-list/doctor-list.component';
import { DoctorDetailComponent } from './components/doctors/doctor-detail/doctor-detail.component';
import { DoctorFormComponent } from './components/doctors/doctor-form/doctor-form.component';

export const routes: Routes = [
    { path: 'doctors', component: DoctorListComponent },
    { path: 'doctors/:id', component: DoctorDetailComponent },
    { path: 'create-doctor', component: DoctorFormComponent },
    { path: '', redirectTo: 'doctors', pathMatch: 'full' },
    // { path: '**', component: NoAvailablePageComponent },
];
