import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  imports: [],
  templateUrl: './roles.html',
  styleUrl: './roles.css'
})
export class Roles {
  firstName: string = "Angular tutorial";
  angularVersion = "version 18";
  version: number = 18;
  isActive: boolean = false;
  currentDate: Date = new Date();
}
