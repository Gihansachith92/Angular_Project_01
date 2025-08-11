import { Component, inject, OnInit } from '@angular/core';
import { ClientC } from '../../model/class/ClientC';
import {ClientS} from '../../services/clientS';
import { FormsModule } from '@angular/forms';
import { APIResponseModel } from '../../model/interface/role';

@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.html',
  styleUrl: './client.css'
})
export class Client implements OnInit{

  clientObj: ClientC = new ClientC(); 
  clientList: ClientC[] = [];
  clientService = inject(ClientS);

  ngOnInit(): void {
      this.loadClient();
  }

  loadClient(){
    this.clientService.getAllClients().subscribe((res:APIResponseModel) => {
        this.clientList = res.data;
    })
  }

  onSaveClient(){
    debugger;
    this.clientService.addUpdate(this.clientObj).subscribe((res:APIResponseModel) => {
      if(res.result){
        alert("client created success")
        this.loadClient();
        this.clientObj = new ClientC();
      }else{
        alert(res.message)
      }
    })
  }

  onDelete(id: number){
    const isDelete = confirm("Are you sure want to delete");
    if(isDelete){
        this.clientService.deleteClientById(id).subscribe((res:APIResponseModel) => {
      if(res.result){
        alert("client deleted success")
        this.loadClient();
      }else{
        alert(res.message)
      }
    })
    }
    
  }

}
