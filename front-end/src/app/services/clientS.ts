import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientC } from '../model/class/ClientC';
import { environment } from '../../environments/environment.development';
import { APIResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientS {

  constructor(private http: HttpClient){}

  getAllClients ():Observable<APIResponseModel>{
        return this.http.get<APIResponseModel>(environment.API_URL + "GetAllClients")
  }

  getAllUser(){
      return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  getAllEmployee ():Observable<APIResponseModel>{
       return this.http.get<APIResponseModel>(environment.API_URL + "GetAllEmployee")
  }

  addUpdate (obj: ClientC):Observable<APIResponseModel>{
        return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClient" , obj)
  }

  deleteClientById (id: number):Observable<APIResponseModel>{
        return this.http.delete<APIResponseModel>(environment.API_URL + "DeleteClientByClientId?clientId=" + id)
  }

  addClientProjectUpdate (obj: ClientC):Observable<APIResponseModel>{
        return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClientProject" , obj)
  }

}
