import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DoctorService } from '../../../services/doctor.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctor-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './doctor-form.component.html',
  styleUrl: './doctor-form.component.css'
})
export class DoctorFormComponent implements OnInit{
  doctorForm!: FormGroup;
  isSubmitting = false;
  constructor(private fb: FormBuilder, private doctorService: DoctorService, private router: Router){}
  ngOnInit(): void {
    this.doctorForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      specialization: ['',Validators.required],
      contactNumber: ['',[Validators.required, Validators.pattern('^[0-9]*$')]],
      email: ['',[Validators.required, Validators.email]],
      experienceYears: [0,[Validators.required, Validators.min(1)]],
    });
  }

  onSubmit(){
    if(this.doctorForm?.valid){
      this.isSubmitting = true;
      const doctorData = this.doctorForm?.value;

      this.doctorService.addDoctor(doctorData).subscribe(
        {
          next: (response) =>{
            this.doctorForm.reset();
            this.router.navigate(['/doctors']);
          },
          error: (error) =>{
            console.error(error);
          },
          complete: () =>{
            this.isSubmitting = false
          } 
        }
      )
    }
  }

}
