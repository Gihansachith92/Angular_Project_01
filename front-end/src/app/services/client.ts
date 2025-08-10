import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientC } from '../model/class/ClientC';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class Client {

  constructor(private http: HttpClient){}

  getAllClients ():Observable<ClientC>{
        return this.http.get<ClientC>(environment.API_URL + "GetAllClients")
  }

  addUpdate (obj: ClientC):Observable<ClientC>{
        return this.http.post<ClientC>(environment.API_URL + "AddUpdateClient" , obj)
  }

  deleteClientById (id: number):Observable<ClientC>{
        return this.http.get<ClientC>(environment.API_URL + "DeleteClientByClientId?clientId=" + id)
  }

}
