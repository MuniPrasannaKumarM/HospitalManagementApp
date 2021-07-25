import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { PatientDoctorRelationModel } from "../Models/patientDoctorRelation";

@Injectable({
  providedIn:'root'
})
export class PatientDoctorRelation{

  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient){
  }
  public addAppointment(appointment:PatientDoctorRelationModel):Observable<PatientDoctorRelationModel>{
    console.log("addded data"+ appointment.doctorid);
    return this.http.post<PatientDoctorRelationModel>(`${this.apiServerUrl}/relation/add`, appointment);
  }
  public getAppointments():Observable<PatientDoctorRelationModel[]>{
    return this.http.get<PatientDoctorRelationModel[]>(`${this.apiServerUrl}/relation/all`);
  }
  public getAppointmentById(appid:number):Observable<PatientDoctorRelationModel>{
    return this.http.get<PatientDoctorRelationModel>(`${this.apiServerUrl}/relation/find/appid/${appid}`);
  }
  public getAppointmentByPatientId(patientid:number):Observable<PatientDoctorRelationModel[]>{
    return this.http.get<PatientDoctorRelationModel[]>(`${this.apiServerUrl}/relation/find/patientid/${patientid}`);
  }
  public getAppointmentByDoctorId(doctorid:number):Observable<PatientDoctorRelationModel[]>{
    return this.http.get<PatientDoctorRelationModel[]>(`${this.apiServerUrl}/relation/find/doctorid/${doctorid}`);
  }
  public getAppointmentByPatientIdAndStatus(patientid:number, status:string):Observable<PatientDoctorRelationModel[]>{
    return this.http.get<PatientDoctorRelationModel[]>(`${this.apiServerUrl}/relation/find/patientid/status/${patientid}/${status}`);
  }
  public getAppointmentByDoctorIdAndStatus(doctorid:number, status:string):Observable<PatientDoctorRelationModel[]>{
    return this.http.get<PatientDoctorRelationModel[]>(`${this.apiServerUrl}/relation/find/doctorid/status/${doctorid}/${status}`);
  }
  public getAppointmentByDoctorIdAndDate(doctorid:number, date:string):Observable<PatientDoctorRelationModel[]>{
    return this.http.get<PatientDoctorRelationModel[]>(`${this.apiServerUrl}/relation/find/doctorid/date/${doctorid}/${date}`);
  }
  public getAppointmentByDoctorIdAndPateintidAndDate(doctorid:number,patientid:number, date:string):Observable<PatientDoctorRelationModel>{
    return this.http.get<PatientDoctorRelationModel>(`${this.apiServerUrl}/relation/find/doctorid/${doctorid}/patientid/${patientid}/date/${date}`);
  }
  public updatePrescription(patientDoctor:PatientDoctorRelationModel):Observable<PatientDoctorRelationModel>{

    return this.http.put<PatientDoctorRelationModel>(`${this.apiServerUrl}/relation/update/appid/prescription`, patientDoctor);
  }
  public updateStatus(patientDoctor:PatientDoctorRelationModel, status:string):Observable<PatientDoctorRelationModel>{
    return this.http.put<PatientDoctorRelationModel>(`${this.apiServerUrl}/relation/update/status/${status}`, patientDoctor);
  }


}
