import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClientS } from '../../services/clientS';
import { APIResponseModel, Employee } from '../../model/interface/role';
import { ClientC } from '../../model/class/ClientC';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule],
  templateUrl: './client-project.html',
  styleUrl: './client-project.css'
})
export class ClientProject implements OnInit{

  ProjectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl(""),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(""),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl("")

  })

  clientSrv = inject(ClientS);
  employeeList: Employee[] = [];
  clientList: ClientC[] = [];

  ngOnInit(): void {
      this.getAllClient();
      this.getAllEmployee();
  }

  getAllEmployee (){
    this.clientSrv.getAllEmployee().subscribe((res:APIResponseModel) => {
        this.employeeList =  res.data;
    })
  }

  getAllClient (){
    this.clientSrv.getAllClients().subscribe((res:APIResponseModel) => {
        this.clientList =  res.data;
    })
  }

}
