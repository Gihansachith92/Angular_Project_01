import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.html',
  styleUrl: './roles.css'
})
export class Roles {
  firstName: string = "Angular tutorial";
  angularVersion = "version 18";
  version: number = 18;
  isActive: boolean = false;
  currentDate: Date = new Date();
  inputType: string = "text";

  showWelcomeAlert(){
    alert("welcome to angular 18 tutorial")
  }

  showMessage(message:string){
    alert(message)
  }

}
