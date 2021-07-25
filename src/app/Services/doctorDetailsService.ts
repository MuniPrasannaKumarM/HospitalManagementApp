import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, ObservableLike } from "rxjs";
import { environment } from "src/environments/environment";
import { DoctorDetails } from "../Models/doctorDetails";

@Injectable({
  providedIn:'root'
})
export class DoctorDetailsService{

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient){
  }
  public getDoctors():Observable<DoctorDetails[]>{
    return this.http.get<DoctorDetails[]>(`${this.apiServerUrl}/doctor/all`);
  }
  public getDoctorsByEmail(email:string):Observable<DoctorDetails>{
    return this.http.get<DoctorDetails>(`${this.apiServerUrl}/doctor/find/${email}`);
  }
  public getDoctorsByEmailAndPassword(email:string, password:string):Observable<DoctorDetails>{
    return this.http.get<DoctorDetails>(`${this.apiServerUrl}/doctor/find/${email}/${password}`);
  }
  public addDoctor(doctor:DoctorDetails):Observable<DoctorDetails>{
    return this.http.post<DoctorDetails>(`${this.apiServerUrl}/doctor/add`,doctor);
  }
  public getDoctorsById(id:number):Observable<DoctorDetails>{
    return this.http.get<DoctorDetails>(`${this.apiServerUrl}/doctor/find/id/${id}`);
  }
  public deleteDoctor(id:number):Observable<string>{
    return this.http.delete<string>(`${this.apiServerUrl}/doctor/delete/${id}`);
  }
}
