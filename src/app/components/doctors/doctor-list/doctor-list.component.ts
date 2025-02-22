import { Component } from '@angular/core';
import { DoctorService } from '../../../services/doctor.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctor-list',
  imports: [CommonModule],
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.css'
})
export class DoctorListComponent {
  doctors: any[] = [];

  constructor(private doctorService: DoctorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDoctors();
  }

  getDoctors(){
    this.doctorService.getDoctors().subscribe((data: any[]) => {
      this.doctors = data;
      console.log('this.doctors ',this.doctors);
      
    });
  }

  addDoctor(){
    this.router.navigate(['/doctor-form','0']);
  }

  updateDoctor(id: any){
    this.router.navigate(['/doctor-form',id]);
  }

  deleteDoctor(id: any){

  }

  exportToExcel(){
    
  }
}
