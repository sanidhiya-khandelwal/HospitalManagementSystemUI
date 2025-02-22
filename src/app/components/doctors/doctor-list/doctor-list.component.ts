import { Component } from '@angular/core';
import { DoctorService } from '../../../services/doctor.service';

@Component({
  selector: 'app-doctor-list',
  imports: [],
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.css'
})
export class DoctorListComponent {
  doctors: any[] = [];

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.getDoctors();
  }

  getDoctors(){
    this.doctorService.getDoctors().subscribe((data: any[]) => {
      this.doctors = data;
      console.log('this.doctors ',this.doctors);
      
    });
  }
}
