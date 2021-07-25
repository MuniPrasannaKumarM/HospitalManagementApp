import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DoctorDetails } from 'src/app/Models/doctorDetails';
import { patientDetails } from 'src/app/Models/patientDetails';
import { PatientDoctorRelationModel } from 'src/app/Models/patientDoctorRelation';
import { DoctorDetailsService } from 'src/app/Services/doctorDetailsService';
import { PatientDetailsService } from 'src/app/Services/patientDetailsService';
import { PatientDoctorRelation } from 'src/app/Services/PatientRelationService';

@Component({
  selector: 'app-appbookform',
  templateUrl: './appbookform.component.html',
  styleUrls: ['./appbookform.component.css']
})
export class AppbookformComponent implements OnInit {

  constructor(private route:ActivatedRoute, private patientDoctorRelation:PatientDoctorRelation,private doctorService:DoctorDetailsService
    , private patientService:PatientDetailsService, private router:Router) { }
    Doctor:DoctorDetails;
    Patient:patientDetails;
    appointmentPatientDoctor:PatientDoctorRelationModel[];
    datasubmitted:PatientDoctorRelationModel;
    datevariable = '';
    timings:string[] = ['5','6','7','8','9','10'];
    checkavail:boolean=false;
  ngOnInit(): void {
    this.getRouteParameters();
  }

  checkavailablility(doctorid:number, date:string)
  {
    console.log("date "+date+" doctorid "+doctorid);
    this.getDoctorStatus(doctorid, date);

    this.getRouteParameters();
  }
  getRouteParameters(){
    this.route.params.subscribe(
      (params:Params)=>
      {
        console.log("params of doctor   "+params['id']);
        this.getDoctorDetails(+params['id']);
        console.log("params of patient "+params['patient_id']);
        this.getPatientDetails(+params['patient_id']);

      }

    );
  }
  getDoctorDetails(doctorid:number){
       this.doctorService.getDoctorsById(doctorid).subscribe(
         (response:DoctorDetails)=>
         {
          this.Doctor = response;
         }
       );
  }
  getPatientDetails(patientid:number){
    this.patientService.getPatientById(patientid).subscribe(
      (response:patientDetails)=>{
        this.Patient = response;
        console.log('patient details'+response);

      }
    )
  }
  getDoctorStatus(doctorid:number,date:string)
  {
    this.patientDoctorRelation.getAppointmentByDoctorIdAndDate(doctorid, date).subscribe(
      (response:PatientDoctorRelationModel[])=>{
        this.appointmentPatientDoctor = response;
        // console.log("appointment detail "+this.appointmentPatientDoctor);
        if (this.appointmentPatientDoctor != null)
        {for (var v of this.appointmentPatientDoctor)
        {
          // console.log("timings check "+v.time+" "+this.timings.indexOf(v.time));
          this.timings.splice(this.timings.indexOf(v.time),1);
        }
        this.checkavail = true;
        // this.getRouteParameters();
        // console.log("timings "+ this.timings);
      }
      }
    )
  }
  getradio(){
    // var radio1 = document.forms.appoform;
    var radio = document.getElementsByName("flexRadioDefault");
    console.log("radio "+radio);


  }

  onsubmitForm(form:NgForm){
    console.log("form submitted "+form.value.doctorid);

    this.patientDoctorRelation.addAppointment(form.value).subscribe(
      (response:PatientDoctorRelationModel)=>{
        console.log("successfull "+ response);
        this.route.params.subscribe(
          (params:Params)=>
          {
            console.log("params of doctor   "+params['id']);
            this.getDoctorDetails(+params['id']);
            console.log("params of patient "+params['patient_id']);
            this.getPatientDetails(+params['patient_id']);
            var routing = "/patient/dashboard/"+params['patient_id']+"/viewappointments"
            this.router.navigateByUrl(routing);
          }
        )
      }
    );
    console.log(form.value);
  }
}
