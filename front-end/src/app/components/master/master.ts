import { Component } from '@angular/core';
import { Designation } from '../designation/designation';
import { Roles } from '../roles/roles';

@Component({
  selector: 'app-master',
  imports: [Designation,Roles],
  templateUrl: './master.html',
  styleUrl: './master.css'
})
export class Master {

  currentComponent: string = "";

}
