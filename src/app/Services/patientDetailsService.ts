import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { patientDetails } from "../Models/patientDetails";
@Injectable({
  providedIn:'root',
})
export class PatientDetailsService{

  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient){
  }
  public getPatients():Observable<patientDetails[]>{
    return this.http.get<patientDetails[]>(`${this.apiServerUrl}/patient/all`);
  }
  public getPatientByEmail(email:string):Observable<patientDetails>{
    return this.http.get<patientDetails>(`${this.apiServerUrl}/patient/find/${email}`);
  }
  public getPatientById(patientid:number):Observable<patientDetails>{
    return this.http.get<patientDetails>(`${this.apiServerUrl}/patient/find/patientid/${patientid}`);
  }
  public getPatient(email:string, password:string):Observable<patientDetails>{
    return this.http.get<patientDetails>(`${this.apiServerUrl}/patient/find/${email}/${password}`);
  }
  public addPatient(patient:patientDetails):Observable<patientDetails>{
    return this.http.post<patientDetails>(`${this.apiServerUrl}/patient/add`, patient);
  }
  public deletePatient(id:number):Observable<string>{
    return this.http.delete<string>(`${this.apiServerUrl}/patient/delete/${id}`);
  }
}
